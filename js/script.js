// Ini File js
const celciusInput = document.querySelector('input[name="celcius-input"]');
const fahrenheitOutput = document.querySelector('input[name="fahrenheit-output"]');
const methodInput = document.querySelector('input[name="celcius-fahrenheit"]');
const buttonConvert = document.getElementById('button-convert');
const buttonReset = document.getElementById('button-reset');
const buttonReverse = document.getElementById('button-reverse');

// Add event listeners to the buttons
buttonConvert.addEventListener('click', convertTemperature);
buttonReset.addEventListener('click', resetTemperature);
buttonReverse.addEventListener('click', reverseTemperature);

// Function to convert Celsius to Fahrenheit
function convertTemperature() {
    const celsius = parseFloat(celciusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.value = fahrenheit.toFixed(2);
    methodInput.value = `(${celsius} x 9/5) + 32 = ${fahrenheit}`;
}

// Function to reset the temperature values
function resetTemperature() {
    celciusInput.value = '';
    fahrenheitOutput.value = '';
    methodInput.value = '';
}

// Function to reverse the temperature values
function reverseTemperature() {
    const fahrenheit = parseFloat(fahrenheitOutput.value);
    const celsius = (fahrenheit - 32) / 9/5;
    celciusInput.value = celsius.toFixed(2);
    methodInput.value = `(${fahrenheit} - 32) / 9/5 = ${celsius}`
}