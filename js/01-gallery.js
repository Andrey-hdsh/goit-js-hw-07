import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainerEl = document.querySelector('.gallery');

// console.log(galleryContainerEl);
renderGallery(galleryItems);

function renderGallery(array) {
    const galleryMarkup = array.map(items =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${items.original}">
    <img
      class="gallery__image"
      src="${items.preview}"
      data-source="${items.original}"
      alt="${items.description}"
    />
    </a>
        </li>`).join('');
    galleryContainerEl.insertAdjacentHTML('beforeend' , galleryMarkup)
};

galleryContainerEl.addEventListener('click', hendleGalleryClick);

function hendleGalleryClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;  
    };

    // const targetElement = event.target.closest('.gallery__item');
    const productGallary = event.target.dataset.source;
    const productInfo = galleryItems.find(card => card.original === productGallary);

    const instance = basicLightbox.create(`
    <div class="modal">
       <img
      class="gallery__image"
      src="${productInfo.original}"
      data-source="${productInfo.original}"
      alt="${productInfo.description}",
    />
    </div>`);

    instance.show();

    // const modalWindowElements = document.querySelector('.modal');
    // console.log(modalWindowElements);

    window.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        instance.close();
      }
    });
};


