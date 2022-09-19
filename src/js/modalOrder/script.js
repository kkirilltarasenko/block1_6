let iconModalOrder = document.querySelector('.icon--modal--order');
let sidebarIconModalOrder = document.querySelector('.sidebar__icon--modal--order');
let iconCross = document.querySelector('.icon--cross--order');
let modalWindow = document.querySelector('.modal-order');
let modalWindowContainer = document.querySelector('.modal-order__container');

function blur(e) {
  if (modalWindow.classList.contains('modal-window--opened')) {
    const clickModalContainer = e.composedPath().includes(modalWindowContainer)
    const clickIconModalOrder = e.composedPath().includes(iconModalOrder)
    if (!clickModalContainer && !clickIconModalOrder) {
      modalWindow.classList.remove('modal-window--opened')
    }
  }

  if (modalWindow.classList.contains('modal-window--opened-intro')) {
    const clickModalContainer = e.composedPath().includes(modalWindowContainer)
    const clickIconModalOrder = e.composedPath().includes(sidebarIconModalOrder)
    if (!clickModalContainer && !clickIconModalOrder) {
      modalWindow.classList.remove('modal-window--opened-intro')
    }
  }
}

document.addEventListener('click', blur)

const anim = modalWindow.animate([
  {opacity: 0},
  {opacity: 1}
], {
  duration: 700,
  fill: 'forwards',
  easing: 'ease-in-out',
  iterations: 1
})

anim.pause();

function open() {
  modalWindow.classList.add('modal-window--opened')
  anim.play()
}

function openIntro() {
  modalWindow.classList.add('modal-window--opened-intro')
  anim.play()
}

function close() {
  modalWindow.classList.remove('modal-window--opened')
  modalWindow.classList.remove('modal-window--opened-intro')
}

sidebarIconModalOrder.addEventListener('click', openIntro)
iconModalOrder.addEventListener('click', open)
iconCross.addEventListener('click', close)

