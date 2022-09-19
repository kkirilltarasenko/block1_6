let iconModalCall = document.querySelector('.icon--modal--call');
let sidebarIconModalCall = document.querySelector('.sidebar__icon--modal--call');
let iconCross = document.querySelector('.icon--cross--call');
let modalWindow = document.querySelector('.modal-call');
let modalWindowContainer = document.querySelector('.modal-call__container');

function blur(e) {
  if (modalWindow.classList.contains('modal-window--opened')) {
    const clickModalContainer = e.composedPath().includes(modalWindowContainer)
    const clickIconModalOrder = e.composedPath().includes(iconModalCall)
    if (!clickModalContainer && !clickIconModalOrder) {
      modalWindow.classList.remove('modal-window--opened')
    }
  }

  if (modalWindow.classList.contains('modal-window--opened-sidebar')) {
    const clickModalContainer = e.composedPath().includes(modalWindowContainer)
    const clickIconModalOrder = e.composedPath().includes(sidebarIconModalCall)
    if (!clickModalContainer && !clickIconModalOrder) {
      modalWindow.classList.remove('modal-window--opened-sidebar')
    }
  }
}

document.addEventListener('click', blur)

const anim = modalWindow.animate([
  {opacity: 0},
  {opacity: 1}
], {
  duration: 700,
  fill: 'backwards',
  easing: 'ease-in-out',
  iterations: 1
})

anim.pause();

function open() {
  modalWindow.classList.add('modal-window--opened')
  anim.playbackRate = 1
  anim.play()
}

function sidebarOpen() {
  modalWindow.classList.add('modal-window--opened-sidebar')
  anim.playbackRate = 1
  anim.play()
}

function close() {
  anim.playbackRate = -1
  anim.play()

  modalWindow.classList.remove('modal-window--opened')
  modalWindow.classList.remove('modal-window--opened-sidebar')
}

sidebarIconModalCall.addEventListener('click', sidebarOpen)
iconModalCall.addEventListener('click', open)
iconCross.addEventListener('click', close)

