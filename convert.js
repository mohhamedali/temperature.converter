window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const cInput = document.getElementById('cInput');
    const fInput = document.getElementById('fInput');
    const convertButton = document.getElementById('convertButton');
    const errorMessage = document.getElementById('errorMessage');

    // Event listener for the Convert button
    convertButton.addEventListener('click', function() {
        const celsius = parseFloat(cInput.value);
        const fahrenheit = parseFloat(fInput.value);

        if (!isNaN(celsius)) {
            const convertedF = convertCtoF(celsius);
            if (!isNaN(convertedF)) {
                fInput.value = convertedF;
                updateImage(convertedF);
                errorMessage.innerHTML = '';
            } else {
                errorMessage.innerHTML = `${cInput.value} is not a number`;
            }
        } else if (!isNaN(fahrenheit)) {
            const convertedC = convertFtoC(fahrenheit);
            if (!isNaN(convertedC)) {
                cInput.value = convertedC;
                updateImage(fahrenheit);
                errorMessage.innerHTML = '';
            } else {
                errorMessage.innerHTML = `${fInput.value} is not a number`;
            }
        } else {
            errorMessage.innerHTML = `${cInput.value || fInput.value} is not a number`;
        }
    });

    // Event listeners for input fields to clear opposing field
    cInput.addEventListener('input', function() {
        fInput.value = '';
        errorMessage.innerHTML = '';
    });

    fInput.addEventListener('input', function() {
        cInput.value = '';
        errorMessage.innerHTML = '';
    });
}

// Celsius to Fahrenheit conversion
function convertCtoF(degreesCelsius) {
    return degreesCelsius * 9/5 + 32;
}

// Fahrenheit to Celsius conversion
function convertFtoC(degreesFahrenheit) {
    return (degreesFahrenheit - 32) * 5/9;
}

// Update image based on temperature
function updateImage(temperature) {
    const weatherImage = document.getElementById('weatherImage');
    if (temperature <= 32) {
        weatherImage.src = 'cold.png';
    } else if (temperature <= 50) {
        weatherImage.src = 'cool.png';
    } else {
        weatherImage.src = 'warm.png';
    }
}
