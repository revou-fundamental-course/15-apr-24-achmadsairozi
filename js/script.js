//Ini file js

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("textareaCelsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    
    document.getElementById("textareaFahrenheit").value = fahrenheit.toFixed(2);

    document.getElementById("textareaKalkulasi").value = '('+celsius+'\u00B0C x 9/5) + 32 = '+fahrenheit.toFixed(2)+'\u00B0F';
}

// Function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("textareaFahrenheit").value);
    var celsius = (fahrenheit - 32) * 5/9;

    document.getElementById("textareaCelsius").value = celsius.toFixed(2);

    document.getElementById("textareaKalkulasi").value = '('+fahrenheit+'\u00B0F - 32) * 5/9 = '+celsius.toFixed(2)+'\u00B0C';
}

function resetTextArea() {
    document.getElementById("textareaCelsius").value = "";
    document.getElementById("textareaFahrenheit").value = "";
    document.getElementById("textareaKalkulasi").value = "";
}