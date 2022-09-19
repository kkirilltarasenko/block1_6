const burger = document.querySelector('.icon--burger')
const sidebar = document.querySelector('.sidebar')
const sidebarWrapper = document.querySelector('.sidebar__wrapper')
const iconCross = document.querySelector('.icon--cross')

let modalWindowCall = document.querySelector('.modal-call');
let modalWindowOrder = document.querySelector('.modal-order');

let screenWidth = document.querySelector('.screen-width');
let wScreenWidth;

function blur(e) {
  if (sidebar.classList.contains('sidebar--opened')) {
    const clickSidebar = e.composedPath().includes(sidebarWrapper)
    const clickBurger = e.composedPath().includes(burger)
    const clickModalCall = e.composedPath().includes(modalWindowCall)
    const clickModalOrder = e.composedPath().includes(modalWindowOrder)
    if (!clickSidebar && !clickBurger && !clickModalCall && !clickModalOrder ) {
      sidebar.classList.remove('sidebar--opened')
    }
  }
}

document.addEventListener('click', blur)

const anim = sidebar.animate([
  {opacity: 0},
  {opacity: 1}
], {
  duration: 700,
  fill: 'forwards',
  easing: 'ease-in-out',
  iterations: 1
})

anim.pause();

function start() {
  sidebar.classList.add('sidebar--opened')
  sidebarWrapper.classList.add('sidebar__wrapper--opened')
  iconCross.classList.add('icon--cross--opened')

  anim.play()
}

function end() {
  sidebar.classList.remove('sidebar--opened')
  sidebarWrapper.classList.remove('sidebar__wrapper--opened')
  iconCross.classList.remove('icon--cross--opened')
}

burger.addEventListener('click', start)
iconCross.addEventListener('click', end)

function removeSidebar() {
  wScreenWidth = screenWidth.offsetWidth;
  if (wScreenWidth > 1375) {
    sidebar.classList.remove('sidebar--opened')
    sidebarWrapper.classList.remove('sidebar__wrapper--opened')
  }
}

window.addEventListener('resize', () => {
  removeSidebar();
});

window.addEventListener('load', () => {
  removeSidebar();
});
