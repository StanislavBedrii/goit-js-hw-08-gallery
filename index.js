import galleryImg from "./gallery-items.js";


const refs = {
    galleryList: document.querySelector('ul.js-gallery'),
    jsLightbox: document.querySelector('.js-lightbox'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    LightboxImage: document.querySelector('.lightbox__image'),
    closeLightbox: document.querySelector('button[data-action="close-lightbox"]'),   
}

refs.galleryList.addEventListener('click', onTagsClick);
refs.galleryList.addEventListener("click", modalIsOpen)
refs.galleryList.addEventListener("click", addImgSrc)
refs.jsLightbox.addEventListener("click", modalIsClose)
refs.lightboxOverlay.addEventListener('click', modalIsClose);
window.addEventListener('keydown', keyModalIsClose);



const createGallery = galleryImg.map(({ preview, original, description }, i) =>
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      data-index="${i}"
    />
  </a>
</li>`).join(" ");
    


refs.galleryList.insertAdjacentHTML('afterbegin', createGallery)


function onTagsClick(event) {
    event.preventDefault();
    console.log(event.target.nodeName);
    if (event.target.nodeName !== "IMG") {
        return
    }   
}

function modalIsOpen(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;   
    };

    refs.jsLightbox.classList.add('is-open');
    
    // console.log(event.target.nodeName);
    addModalSrc(event);

} 


function addImgSrc(event) {
    refs.LightboxImage.src = event.target.dataset.source
    refs.LightboxImage.alt = event.target.alt
}



function modalIsClose() {
    refs.jsLightbox.classList.remove('is-open');
    addModalSrc(event);
}


function cleanModalSrc() {
    refs.jsLightboxImage.src = '#';
    refs.jsLightboxImage.alt = '';
    
};

function keyModalIsClose(event) {

    if (refs.jsLightbox.classList.contains('is-open') && event.code === 'Escape') {
        modalIsClose();
    }
    
}; 

