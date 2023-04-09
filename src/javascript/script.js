const value = document.getElementById('value')
const buttonPlus = document.getElementById('plus')
const buttonMinus = document.getElementById('minus')
const buttonReset = document.getElementById('reset')

let count = 0;
let intervalId = 0;


const updateValue = () => {
  value.innerHTML = count
}

buttonPlus.addEventListener('mousedown', () => {
  intervalId = setInterval(() => {
    count += 1
    updateValue()
  }, 100)
})

buttonMinus.addEventListener('mousedown', () => {
  intervalId = setInterval(() => {
    count -= 1
    updateValue()
  }, 100)
})

buttonReset.addEventListener('click', () => {
  count = 0
  updateValue()
})

document.addEventListener('mouseup', () => clearInterval(intervalId))