import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import icon from '../img/bi_x-octagon.svg';

const gallery = document.querySelector('.gallery');

export function imagesTemplate(images) {
  const galleryMarkup = images
    .map(
      item => `
    <li class="gallery-item">
      <a class="gallery-link" href="${item.largeImageURL}">
        <img class="gallery-image" src="${item.webformatURL}" alt="${item.tags}" />
        <figcaption class="thumb-data">
          <dl class="thumb-data-list">
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Likes</dt>
              <dd class="thumb-data-data">${item.likes}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Views</dt>
              <dd class="thumb-data-data">${item.views}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Comments</dt>
              <dd class="thumb-data-data">${item.comments}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Downloads</dt>
              <dd class="thumb-data-data">${item.downloads}</dd>
            </div>
          </dl>
        </figcaption>
      </a>
    </li>
  `
    )
    .join('');

  gallery.innerHTML = galleryMarkup;
  lightbox.refresh();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function showMessage() {
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
}
