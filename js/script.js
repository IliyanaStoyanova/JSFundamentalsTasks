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
