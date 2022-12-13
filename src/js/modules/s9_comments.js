export default function () {
  const s9RequestRow = document.querySelector('.s9-request__row');
  const s9ButtonItem = document.querySelectorAll('.s9-button__item');
  let rowWidth = getComputedStyle(s9RequestRow).width;
  let offset = (+rowWidth.replace(/\D/g, ''));
  s9ButtonItem.forEach((item, i) => {
    let slideTo = i;
    item.addEventListener('click', () => {
      s9RequestRow.style.transform = `translate(-${offset * slideTo}px)`;
      s9ButtonItem.forEach(item => {
        item.classList.remove('s9-active');
        s9ButtonItem[i].classList.add('s9-active');
      });
    });
  });
} //