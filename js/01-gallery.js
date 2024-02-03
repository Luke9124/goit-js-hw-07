import { galleryItems } from './gallery-items.js';
// Change code below this line

// Old version : const gallery = document.querySelector('.gallery');

// document.body.addEventListener('keypress', e => {
//   if (e.key === 'Escape') basicLightbox.close();
// });

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

//   galleryLink.appendChild(galleryImage);
//   galleryItem.appendChild(galleryLink);
//   gallery.appendChild(galleryItem);
// }

// gallery.addEventListener('click', event => {
//   event.preventDefault();

//   const lightbox = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
//   `);

//   lightbox.show();
// });

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

gallery.addEventListener('click', event => {
  event.preventDefault();

  const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  lightbox.show();
});

document.body.addEventListener('keypress', e => {
  if (e.key === 'Escape') basicLightbox.close();
});

console.log(galleryItems);
