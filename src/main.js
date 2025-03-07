import fetchImg from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import icon from '/img/bi_x-octagon.svg';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const loadMoreBtn = document.querySelector('.js-btn-load-more');
const loader = document.querySelector('.js-loader');
const gallery = document.querySelector('.js-gallery');

let searchRequest = '';
let page = 1;
const perPage = 40;
let totalHits = 0;

form.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
  evt.preventDefault();

  showLoader();

  const searchRequest = input.value.trim();

  if (!searchRequest) return;
  gallery.innerHTML = '';

  try {
    const response = await fetchImg(searchRequest, page, perPage);

    page = 1;

    if (response.data.hits.length === 0) {
      hideLoadMoreBtn();
      iziToast.show({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FFFFFF',
        messageSize: '16px',
        backgroundColor: '#EF4040',
        maxWidth: '432px',
        iconUrl: icon,
      });
      input.value = '';
    } else {
      imagesTemplate(response.data.hits);
      totalHits = response.data.totalHits;
      if (totalHits > perPage) {
        showLoadMoreBtn();
      }
    }
  } catch (error) {
    console.log(error);
  }

  hideLoader();
}

loadMoreBtn.addEventListener('click', loadMore);

async function loadMore() {
  showLoader();
  const searchRequest = input.value.trim();
  page += 1;

  try {
    const response = await fetchImg(searchRequest, page, perPage);

    totalHits = response.data.totalHits;
    const maxPage = Math.ceil(totalHits / perPage);
    imagesTemplate(response.data.hits);

    if (page >= maxPage) {
      hideLoadMoreBtn();
      iziToast.show({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#000000',
        messageSize: '16px',
        backgroundColor: '#6c8cff',
        maxWidth: '432px',
      });
      input.value = '';
    } else {
      showLoadMoreBtn();
    }
  } catch (error) {
    console.log(error);
  }
  hideLoader();
  scrollPage();
}

//=============================================

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
//==============================================

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('hidden');
}

//=================================================

function scrollPage() {
  const info = gallery.firstElementChild.getBoundingClientRect();
  const height = info.height;
  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });
}
