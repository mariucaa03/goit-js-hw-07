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


let lightBox = null;

galleryStart.addEventListener("click", e => {
    e.preventDefault();

    if( e.target.classList.contains("gallery__image")){
        const imageURL = e.target.dataset.source;

         lightBox = basicLightbox.create(`
        <img src = "${imageURL}" width ="800" height="600"/>`);

        lightBox.show();
    }
});

document.addEventListener("keydown", e => {
    if(e.key === 'Escape' && lightBox !== null){
        lightBox.close();
        lightBox = null;
    }
});