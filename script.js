    // Length Conversions
    const inchesToCentimeters = 2.54;
    const feetToMeters = 0.3048;
    const milesToKilometers = 1.60934;

    // Weight Conversions
    const ouncesToGrams = 28.3495;
    const poundsToKilograms = 0.453592;

    // Volume Conserions 
    const fluidOuncesToMilliliters = 29.5735;
    const gallonsToLiters = 3.78541;

    // Temperature Conversions
    const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

// setting up callback function for button
const convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', () => {

        // Gathering user input
        // const conversionType = document.getElementById('conversionType').value;
        // const conversionDirection = document.getElementById('conversionDirection-select').value;
        const metricConversion = document.getElementById('metricConversion').value;
        const imperialConversion = document.getElementById('imperialConversion').value;
        // Using parseFloat to ensure the users input is treated as a number
        // Allows us to preform mathematical calculations correctly  
        const inputValue = parseFloat(document.getElementById('inputValue').value);
        
        let result;
        
        // Logic for conversion direction
        if (metricConversion !== 'metricConversion' && imperialConversion === 'imperialConversion') {
            switch (metricConversion) {
                case 'inchesToCentimeters' :
                    result = inputValue * inchesToCentimeters;
                    break;
                case 'feetToMeters' :
                    result = inputValue * feetToMeters;
                    break;
                case 'milesToKilometers' :
                    result = inputValue * milesToKilometers;
                    break;
                case 'ouncesToGrams' :
                    result = inputValue * ouncesToGrams;
                    break;
                case 'poundsToKilograms' : 
                    result = inputValue * poundsToKilograms;
                    break;
                case 'fluidOuncesToMilliliters' :
                    result = inputValue * fluidOuncesToMilliliters;
                    break;
                case 'gallonsToLiters' :
                    result = inputValue * gallonsToLiters;
                    break;
                case 'fahrenheitToCelsius' :
                    result = fahrenheitToCelsius(inputValue);
                    break;
                default:
                    result = 'Invalid Conversion Type';
                    break;
            }
        } else if (imperialConversion !== 'imperialConversion' && metricConversion === 'metricConversion') {
            // Imperial to Metric Conversions
            switch(imperialConversion) {
                case 'centimetersToinches' :
                    result = inputValue / inchesToCentimeters;
                    break;
                case 'metersToFeet' :
                    result = inputValue / feetToMeters;
                    break;
                case 'kilometersToMiles' :
                    result = inputValue / milesToKilometers;
                    break;
                case 'gramsToOunces' :
                    result = inputValue / ouncesToGrams;
                    break;
                case 'kilogramsToPounds' :
                    result = inputValue / poundsToKilograms;
                    break;
                case 'millilitersToFluidOunces' :
                    result = inputValue / fluidOuncesToMilliliters;
                    break;
                case 'litersToGallons' :
                    result = inputValue / gallonsToLiters;
                    break;
                case 'celsiusToFahrenheit' :
                    result = (inputValue * 9 / 5) + 32;
                    break;
                default :
                    result = 'Invalid Conversion Type';
                    break;
            }
        } else {
            result = 'Please select either Metric to Imperial or Imperial to Metric conversion.';
        }

        // Displaying results 
        if (typeof result !== 'number') {
            // handle case where the conversion type is not recongized
            document.getElementById('result').textContent = result;
        } else {
            // Using toFixed displays the result with decimal places to only two, e.g. "10.88"
            document.getElementById('result').textContent = result.toFixed(2);
        };
    
    });

// check why nothing is being displayed when trying to convert.

// see if you can make two seperate switch functions, one for each options and have a button and result text for each selection?