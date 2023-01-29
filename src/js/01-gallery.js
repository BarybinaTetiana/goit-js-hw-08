import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function imagesList() {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	  <img
		class="gallery__image"
		src="${preview}"
		data-source="${original}"
		alt="${description}"
	  />
	</a>
  </div>`
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', imagesList());

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
