// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */}

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// elem.classList.add(cls) - добавляет класс cls в список классов элемента

const inputEl = document.querySelector('#validation-input')


const dataLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', () => {
        inputEl.classList.add('invalid');
        inputEl.classList.replace('valid', 'invalid');
    
    if (inputEl.value.length === dataLength) {

        inputEl.classList.add('valid');
        inputEl.classList.replace('invalid', 'valid')

    } else if (inputEl.value.length === 0) {

        inputEl.classList.remove('valid');
      
    }
})




