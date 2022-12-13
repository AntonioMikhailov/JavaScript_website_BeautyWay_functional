import {
  offsetPadding, addOffsetPadding
} from "../script.js";
export default function () {
  const modalWrapper = document.querySelector('.modal-wrapper ');
  const showForm = document.querySelectorAll('.show-form ');
  const modalCancelButton = document.querySelector('.modal-cancelButton');
  const modalButton = document.querySelector('.modal-button ');
  const modalTextarea = document.querySelector('.modal-textarea ');
  const modalInput = document.querySelectorAll('.modal-input ');
  showForm.forEach(item => {
    item.addEventListener('click', () => {
      modalWrapper.classList.add('showModalWindow');
      if (item.hasAttribute('data-buttons7')) {
        addOffsetPadding(false);
      } else {
        addOffsetPadding();
      }
    });
  });
  [modalCancelButton, modalButton, modalWrapper].forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target == modalWrapper || item == modalButton || item == modalCancelButton) {
        modalWrapper.classList.remove('showModalWindow');
        offsetPadding();
      }
      if (item == modalButton) {
        modalInput.forEach(item => {
          item.value = '';
        });
        modalTextarea.value = '';
      }
    });
  });
}