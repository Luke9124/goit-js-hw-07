import { galleryItems } from './gallery-items.js';
// Change code below this line
// Old version : const gallery = document.querySelector('.gallery');

// for (let item of galleryItems) {
//   const galleryItem = document.createElement('div');
//   galleryItem.classList.add('gallery__item');

//   const galleryLink = document.createElement('a');
//   galleryLink.classList.add('gallery__link');
//   galleryLink.href = item.original;

//   const galleryImage = document.createElement('img');
//   galleryImage.classList.add('gallery__image');
//   galleryImage.src = item.preview;
//   galleryImage.dataset.source = item.original;
//   galleryImage.alt = item.description;
//   galleryImage.title = item.description;

//   galleryLink.appendChild(galleryImage);
//   galleryItem.appendChild(galleryLink);
//   gallery.appendChild(galleryItem);
// }
const gallery = document.querySelector('.gallery');

const newGalleryItems = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}"
        data-source="${galleryItem.original}"
        >
        </img>
        </a>
     </li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', newGalleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
