/* 1 task */
const form = document.querySelector('form[name=numberForm]');
const resultField = document.querySelector('div.result');

if(form !== null) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstNumber = parseInt(form.querySelector('input.firstNumber').value);
        const secondNumber = parseInt(form.querySelector('input.secondNumber').value);

        const result = Math.max(firstNumber, secondNumber);
        
        resultField.innerHTML = "Larger number is " + result;
    });
}

/* 2 task */
const formArray = document.querySelector('form[name=arrayForm]');
let arrNumber = [];
const sumElements = (total, num) => {
    return total + num;
}

if(formArray !== null) {
    formArray.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstNumber = parseInt(formArray.querySelector('input.firstNumber').value);
        const secondNumber = parseInt(formArray.querySelector('input.secondNumber').value);
        const thirdNumber = parseInt(formArray.querySelector('input.thirdNumber').value);

        arrNumber.push(firstNumber, secondNumber, thirdNumber);

        const resultArray = arrNumber.reduce(sumElements);

        resultField.innerHTML = "Sum is " + resultArray;
    });
}

