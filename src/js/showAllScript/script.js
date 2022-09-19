/*--- BRANDS ANIMATION ---*/
/* Initialize brands variables */
let brandsContainer = document.querySelector('.brands__container')

let brandsArrows = document.querySelector('.brands-arrows')

let brandsLinkVisible = document.querySelector('.link__visible--brands')
let brandsLinkHidden = document.querySelector('.link__hidden--brands')

/* Animated brands arrows */
const animatedBrandsArrows = brandsArrows.animate([
  {transform: 'rotate(0deg)'},
  {transform: 'rotate(180deg)'}
], {
  duration: 600,
  iterations: 1,
  easing: 'ease-in-out',
  fill: 'forwards'
})

animatedBrandsArrows.pause()

/* Animated brands container */
const brandsAnimation = brandsContainer.animate([
  {height: '175px'},
  {height: '261px'}
], {
  duration: 800,
  iterations: 1,
  easing: 'ease-in-out',
  fill: 'backwards'
})

brandsAnimation.pause()

/* Brands main function */
let i = 0

function playBrandsAnim() {
  if (i % 2 === 0) {
    brandsAnimation.playbackRate = 1
    brandsAnimation.play()

    animatedBrandsArrows.playbackRate = 1
    animatedBrandsArrows.play()

    brandsLinkVisible.classList.add('hidden--text')
    brandsLinkHidden.classList.remove('hidden--text')

    i = 1
  } else {
    brandsAnimation.playbackRate = -1
    brandsAnimation.play()

    animatedBrandsArrows.playbackRate = -1
    animatedBrandsArrows.play()

    brandsLinkVisible.classList.remove('hidden--text')
    brandsLinkHidden.classList.add('hidden--text')
    i = 0
  }
}

/* Brands listeners */
brandsLinkVisible.addEventListener('click', playBrandsAnim)
brandsLinkHidden.addEventListener('click', playBrandsAnim)
/*--- End ---*/

/*--- TECHNICS ANIMATION ---*/
/* Initialize technics variables */
let technicsContainer = document.querySelector('.technics__container')

let technicsArrows = document.querySelector('.technics-arrows')

let technicsLinkVisible = document.querySelector('.link__visible--technics')
let technicsLinkHidden = document.querySelector('.link__hidden--technics')

/* Animated technics arrows */
const animatedTechnicsArrows = technicsArrows.animate([
  {transform: 'rotate(0deg)'},
  {transform: 'rotate(180deg)'}
], {
  duration: 600,
  iterations: 1,
  easing: 'ease-in-out',
  fill: 'forwards'
})

animatedTechnicsArrows.pause()

/* Animated technics container */
const technicsAnimation = technicsContainer.animate([
  {height: '175px'},
  {height: '362px'}
], {
  duration: 1200,
  iterations: 1,
  easing: 'ease-in-out',
  fill: 'backwards'
})

technicsAnimation.pause()

/* Technics main function */
let j = 0

function playTechnicsAnim() {
  if (j % 2 === 0) {
    technicsAnimation.playbackRate = 1
    technicsAnimation.play()

    animatedTechnicsArrows.playbackRate = 1
    animatedTechnicsArrows.play()

    technicsLinkVisible.classList.add('hidden--text')
    technicsLinkHidden.classList.remove('hidden--text')

    j = 1
  } else {
    technicsAnimation.playbackRate = -1
    technicsAnimation.play()

    animatedTechnicsArrows.playbackRate = -1
    animatedTechnicsArrows.play()

    technicsLinkVisible.classList.remove('hidden--text')
    technicsLinkHidden.classList.add('hidden--text')
    j = 0
  }
}
/* Technics listeners */
technicsLinkVisible.addEventListener('click', playTechnicsAnim)
technicsLinkHidden.addEventListener('click', playTechnicsAnim)
/*--- End ---*/
