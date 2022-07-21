import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



const galleryImages = document.querySelector('.gallery');

const createMarkup = createGalleryImage(galleryItems);

galleryImages.insertAdjacentHTML('beforeend', createMarkup);

function createGalleryImage(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    }).join('');
}

let newLightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
});

