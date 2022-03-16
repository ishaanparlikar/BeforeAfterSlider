let divisor = document.getElementById('divisor')
let handle = document.getElementById('handle')
let slider = document.getElementById('slider')

function moveDivisor() {
  handle.style.left = slider.value + '%'
  divisor.style.width = slider.value + '%'
}

window.onload = function () {
  moveDivisor()
}
