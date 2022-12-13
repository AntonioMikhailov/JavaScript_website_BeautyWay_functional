import {
  offsetPadding, addOffsetPadding
} from "../script.js";
export default function () {

  const s4Item = document.querySelectorAll('.s4-item ');
  const s4GalleryItem = document.querySelectorAll('.s4-gallery__item');
  const s4Gallery = document.querySelector('.s4-gallery');
  const s4ButtonPrev = document.querySelector('.s4-button__prev ');
  const s4ButtonCancel = document.querySelector('.s4-button__cancel');
  const s4ButtonNext = document.querySelector('.s4-button__next');
  let SlideIndex = 1;
  s4Item.forEach((item, i) => {
    item.addEventListener('click', () => {
      s4Gallery.classList.add('s4-gallery__show');
      s4GalleryItem[i].classList.add('s4-show__galleryImage');
      SlideIndex = i + 1;
      addOffsetPadding();
    });
  });

  function plusSlides(n) {
    showSlides(SlideIndex += n);
  }

  function showSlides(n) {
    if (n > s4GalleryItem.length) {
      SlideIndex = 1;
    }
    if (n < 1) {
      SlideIndex = s4GalleryItem.length;
    }
    s4GalleryItem.forEach(item => {
      item.classList.remove('s4-show__galleryImage');
      s4GalleryItem[SlideIndex - 1].classList.add('s4-show__galleryImage');
    });
  }
  s4ButtonNext.addEventListener('click', () => {
    plusSlides(1);
  });
  s4ButtonPrev.addEventListener('click', () => {
    plusSlides(-1);
  });
  [s4Gallery, s4ButtonCancel].forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target == s4Gallery || item == s4ButtonCancel) {
        s4Gallery.classList.remove('s4-gallery__show');
        s4GalleryItem.forEach(item => {
          item.classList.remove('s4-show__galleryImage');
          setTimeout(() => {
            offsetPadding();
          }, 200);
        });
      }
    });
  });
}