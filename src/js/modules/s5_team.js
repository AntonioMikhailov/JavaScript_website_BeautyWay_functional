export default function () {
  const s5_accordTitle = document.querySelectorAll('.s5-accord__title');
  const s5_rightImage = document.querySelectorAll('.s5-right__image');
  s5_accordTitle.forEach((item, i) => {
    s5_accordTitle[0].nextElementSibling.style.maxHeight = s5_accordTitle[0].nextElementSibling.scrollHeight + 'px';
    s5_accordTitle[0].classList.add('accord-active');
    s5_rightImage[0].classList.add('accord-active');
    item.addEventListener('click', function () {
      s5_accordTitle.forEach(item => {
        item.nextElementSibling.style.maxHeight = 0 + 'px';
        item.classList.remove('accord-active');
      });
      this.classList.toggle('accord-active');
      if (this.classList.contains('accord-active')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
      s5_rightImage.forEach(item => {
        item.classList.remove('accord-active');
      });
      s5_rightImage[i].classList.add('accord-active');
    });
  });
}