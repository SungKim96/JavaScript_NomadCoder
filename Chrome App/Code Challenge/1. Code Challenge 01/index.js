const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

const title = document.querySelector('h2');

const superEventHandler = {
  handlerMouseOn: () => {
    title.innerText = 'The mouse is here!';
    title.style.color = colors[0];
  },
  handlerMouseLeave: () => {
    title.innerText = 'The mouse is gone!';
    title.style.color = colors[1];
  },
  windowHandlerResize: () => {
    title.innerText = 'You just resized!';
    title.style.color = colors[2];
  },
  windowHandlerMouseClick: () => {
    title.innerText = 'That was a right click!';
    title.style.color = colors[4];
  },
};

title.addEventListener('mouseenter', superEventHandler.handlerMouseOn);
title.addEventListener('mouseleave', superEventHandler.handlerMouseLeave);
window.addEventListener(
  'contextmenu',
  superEventHandler.windowHandlerMouseClick
);
window.addEventListener('resize', superEventHandler.windowHandlerResize);
