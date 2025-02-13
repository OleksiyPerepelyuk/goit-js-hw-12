import fetchImg from './js/pixabay-api';
import { imagesTemplate, showMessage } from './js/render-functions';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const searchRequest = input.value;

  if (!searchRequest) return;

  input.value = '';

  const loader = document.querySelector('.loader');

  loader.style.display = 'block';

  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);

  fetchImg(searchRequest)
    .then(data => searchResults(data.data.hits))
    .catch(err => console.log(err));
}

function searchResults(images) {
  if (!images.length) showMessage();

  imagesTemplate(images);
}
