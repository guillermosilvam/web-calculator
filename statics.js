alert("EN DESARROLLO");

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let operation = '';

function addNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function performOperation(op) {
  operation = op;
  currentNumber += op;
  display.value = currentNumber;
}

function calculateResult() {
  let result = eval(currentNumber);
  display.value = result;
  currentNumber = result;
}

function clearDisplay() {
  currentNumber = '';
  display.value = '';
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonId = e.target.id;
    switch (buttonId) {
      case 'btn-0':
      case 'btn-1':
      case 'btn-2':
      case 'btn-3':
      case 'btn-4':
      case 'btn-5':
      case 'btn-6':
      case 'btn-7':
      case 'btn-8':
      case 'btn-9':
        addNumber(buttonId.split('-')[1]);
        break;
      case 'btn-add':
        performOperation('+');
        break;
      case 'btn-sub':
        performOperation('-');
        break;
      case 'btn-*':
        performOperation('*');
        break;
        case 'btn-/':
        performOperation('/');
        break;
      case 'btn-eq':
        calculateResult();
        break;
      case 'btn-clear':
        clearDisplay();
        break;
      default:
        console.error(`Unknown button: ${buttonId}`);
    }
  });
});
