import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryStart = document.querySelector(".gallery");

function createImage() {
    let galleryHTML = "";

    for (let i = 0; i < galleryItems.length; i++){
        galleryHTML += `
         <li class = "gallery__item">
            <a class = "gallery__link" href = "${galleryItems[i].original}">
                <img class = "gallery__image"
                src = "${galleryItems[i].preview}"
                data-source = "${galleryItems[i].original}"
                alt = "${galleryItems[i].description}"
                />
            </a>
        </li>`
    }
    galleryStart.innerHTML = galleryHTML;
}

createImage();


document.addEventListener('DOMContentLoaded', function () {
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250
    });
  });