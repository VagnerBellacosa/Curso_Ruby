
const el =  document.querySelector('#bouncy_circle');

console.log(55555, mojs)

const anim = new mojs.Shape({
  shape: 'circle',
  fill: {
    '#F64040': '#FC46AD'
  },
  radius: {
    20: 80
  },
  duration: 2000,
  isYoyo: true,
  isShowStart: true,
  easing: 'elastic.inout',
  repeat: 1,
})

document.querySelector('button').addEventListener('click', () => {
 anim.play()
})


