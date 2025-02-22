import fetchImg from './js/pixabay-api';
import {
  imagesTemplate,
  showMessage,
  showMessage2,
} from './js/render-functions';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const loadBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader-container');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  showLoader();

  const searchRequest = input.value;

  if (!searchRequest) return;

  input.value = '';

  fetchImg(searchRequest)
    .then(data => searchResults(data.data.hits))
    .catch(err => console.log(err));

  hideLoader();
}

function searchResults(images) {
  if (!images.length) showMessage();

  imagesTemplate(images);
}

function showLoader() {}
loader.classList.remove('.hidden');

function hideLoader() {
  loader.classList.add('.hidden');
}

function showLoadMoreBtn() {
  loadBtn.classList.remove('.hidden');
}

function hideLoadMoreBtn() {
  loadBtn.classList.add('.hidden');
}
