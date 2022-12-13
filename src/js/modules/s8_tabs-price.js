export default function (triggerSelector, contentSelector, activeClass) {
  triggerSelector = document.querySelectorAll('.s8-tab__title');
  contentSelector = document.querySelectorAll('.s8-tab__column');

  function ShowTab(i = 0) { 
    contentSelector.forEach(item => {
      item.classList.remove(activeClass);
    });
    contentSelector[i].classList.add(activeClass);
    triggerSelector.forEach(item => {
      item.classList.remove(activeClass);
    });
    triggerSelector[i].classList.add(activeClass);
  }
  ShowTab();
  triggerSelector.forEach((item, i) => {
    item.addEventListener('click', () => {
      ShowTab(i);
    });
  });
}