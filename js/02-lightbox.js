import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');

renderGallery(galleryItems);

function renderGallery(array) {
    const galleryMarkup = array.map(items =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${items.original}">
    <img
      class="gallery__image"
      src="${items.preview}"
      alt="${items.description}"/>
    </a>
        </li>`).join('');
    galleryContainerEl.insertAdjacentHTML('beforeend' , galleryMarkup)
};

const lightbox = new SimpleLightbox(".gallery a", {
  
  captionsData: 'alt',
  captionDelay: 250,
});