import navScroll from "./modules/navScroll.js";
import s0_header from "./modules/s0_header.js";
import s1_section from "./modules/s1_section.js";
import s4_portfolio from "./modules/s4_portfolio.js";
import s5_team from "./modules/s5_team.js";
import s8_tabsPrice from "./modules/s8_tabs-price.js";
import s9_comments from "./modules/s9_comments.js";
//компенсация сдвига
let marginOffset = window.innerWidth - document.body.clientWidth;
export function offsetPadding() {
  setTimeout(() => {
    document.body.style.marginRight = 0 + 'px';
    document.body.classList.remove('lock');
    //для якоря
    document.querySelector('.arrow-anchor').style.display = '';
  }, 300);
}
export function addOffsetPadding(dataButtonS7 = true) {
  if (dataButtonS7 == false) {
    console.log(dataButtonS7);
    document.body.style.marginRight = 0 + 'px';
  } else {
    document.body.style.marginRight = marginOffset + 'px';
    //для якоря
    document.querySelector('.arrow-anchor').style.display = 'none';
    document.body.classList.add('lock');
  }
}
window.addEventListener('DOMContentLoaded', () => {
  //вызываем
  navScroll();
  s0_header();
  s1_section();
  s4_portfolio();
  s5_team();
  s8_tabsPrice('.s8-tab__title', '.s8-tab__column', 's8-tab__active');
  s9_comments();
});