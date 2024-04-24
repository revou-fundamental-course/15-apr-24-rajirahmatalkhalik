// Ini File js

// _Celcius_ke_Fahrenheit
const celciusInput = document.querySelector('input[name="celcius-input"]');
const fahrenheitOutput = document.querySelector('input[name="fahrenheit-output"]');
const methodCelciusFahrenheit = document.querySelector('input[name="celcius-fahrenheit"]');
// Buttons
const buttonConvertCelciusFahrenheit = document.getElementById('button-convert-cf');
const buttonResetCelciusFahrenheit = document.getElementById('button-reset-cf');
const buttonReverseCelciusFahrenheit = document.getElementById('button-reverse-cf');

// Add Event Listener to buttons Celcius-Fahrenheit
buttonConvertCelciusFahrenheit.addEventListener('click', convertTemperatureCelciusFahrenheit);
buttonResetCelciusFahrenheit.addEventListener('click', resetTemperatureCelciusFahrenheit);
buttonReverseCelciusFahrenheit.addEventListener('click', reverseTemperatureCelciusFahrenheit);

// Function to Convert Celcius-Fahrenheit
function convertTemperatureCelciusFahrenheit() {
    const celsius = parseFloat(celciusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.value = fahrenheit.toFixed(2);
    methodCelciusFahrenheit.value = `(${celsius}°C x 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

// Function to Reset Celcius-Fahrenheit
function resetTemperatureCelciusFahrenheit() {
    celciusInput.value = '';
    fahrenheitOutput.value = '';
    methodCelciusFahrenheit.value = '';
}

// Function to Reverse Celcius-Fahrenheit
function reverseTemperatureCelciusFahrenheit() {
    const fahrenheit = parseFloat(fahrenheitOutput.value);
    const celsius = (fahrenheit - 32) / 1.8;
    celciusInput.value = celsius.toFixed(2);
    methodCelciusFahrenheit.value = `(${fahrenheit}°F - 32) / 9/5 = ${celsius.toFixed(2)}°C`;
}

