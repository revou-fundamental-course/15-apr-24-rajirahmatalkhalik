// Ini File js

// _Fahrenhait_ke_Celcius
const fahrenheitInput = document.querySelector('input[name="fahrenheit-input"]');
const celciusOutput = document.querySelector('input[name="celcius-output"]');
const methodFahrenheitCelcius = document.querySelector('input[name="fahrenheit-celcius"]');
// Butoons
const buttonConvertFahrenheitCelcius = document.getElementById('button-convert-fc');
const buttonResetFahrenheitCelcius = document.getElementById('button-reset-fc');
const buttonReverseFahrenheitCelcius = document.getElementById('button-reverse-fc');

// Add Event Listener to buttons Fahrenheit-Celcius
buttonConvertFahrenheitCelcius.addEventListener('click', convertTemperatureFahrenheitCelcius);
buttonResetFahrenheitCelcius.addEventListener('click', resetTemperatureFahrenheitCelcius);
buttonReverseFahrenheitCelcius.addEventListener('click', reverseTemperatureFahrenheitCelcius);

// Function to Convert Fahrenheit-Celcius
function convertTemperatureFahrenheitCelcius() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celcius = (fahrenheit - 32) / 1.8;
    celciusOutput.value = celcius.toFixed(2);
    methodFahrenheitCelcius.value = `(${fahrenheit}°F - 32) / 9/5 = ${celcius.toFixed(2)}°C`;
}

// Function to Reset Fahrenheit-Celcius
function resetTemperatureFahrenheitCelcius() {
    fahrenheitInput.value = '';
    celciusOutput.value = '';
    methodFahrenheitCelcius.value = '';
}

// Function to Reverse Fahrenheit-Celcius
function reverseTemperatureFahrenheitCelcius() {
    const celcius = parseFloat(celciusOutput.value);
    const fahrenheit = (celcius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    methodFahrenheitCelcius.value = `(${celcius}°C x 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

