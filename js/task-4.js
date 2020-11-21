// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
  

{/* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div> */}

const btndecrement = document.querySelector('button[data-action="decrement"]')
const btnincrement = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')
// console.log(btndecrement);
// console.log(btnincrement);
// console.log(spanvalue);

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  // console.log(counterValue);
  render();
}

function increment() {
  counterValue += 1;
  render();
}

function render() {
  value.textContent = counterValue;
}

btndecrement.addEventListener('click', decrement)
btnincrement.addEventListener('click', increment)
    