const el = document.querySelector('#bouncy_circle');

console.log(55555, mojs)

const animation = new mojs.Burst({
  radius: { 0: 100 },
  count: 5,
  angle: { 360: 0 },
  children: {
    shape: 'circle',
    fill: { '#F64040': '#FC46AD' },
    radius: { 20: 80 },
    duration: 2000
  }
})

document.querySelector('button').addEventListener('click', () => {
  animation.play()
})