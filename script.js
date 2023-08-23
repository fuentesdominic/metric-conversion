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

// Slang terms used for conversions
const slangTerms = {
    // conserion slang for imperial to metric
    centimetersToinches: 'inch(es)',
    metersToFeet: 'feet',
    kilometersToMiles: 'mile(s)',
    gramsToOunces: 'ounce(s',
    kilogramsToPounds: 'pound(s)',
    millilitersToFluidOunces: 'fluid ounce(s)',
    litersToGallons: 'gallon(s)',
    celsiusToFahrenheit: 'Fahrenheit',
    // conserions slang for metric to imperial
    inchesToCentimeters: 'centimeter(s)',
    feetToMeters: 'meter(s)',
    milesToKilometers: 'kilometer(s)',
    ouncesToGrams: 'gram(s)',
    poundsToKilograms: 'kilogram(s)',
    fluidOuncesToMilliliters: 'milliliter(s)',
    gallonsToLiters: 'liter(s)',
    fahrenheitToCelsius: 'Celcius',
// Fix NaN being displayed when user enters something triggering error
    // conversion_error: 'Invalid Conversion Type'
}


// setting up callback function for button
const convertButton_M2I = document.getElementById('convertButton-M2I');
convertButton_M2I.addEventListener('click', () => {

    // Gathering user input
    const metricConversion = document.getElementById('metricConversion').value;

    // Using parseFloat to ensure the users input is treated as a number
    // Allows us to preform mathematical calculations correctly  
    const inputValue_M2I = parseFloat(document.getElementById('inputValue-M2I').value);

    // Error message if user enter invalid value or no value
    const error_message_M2I = 'Enter A Value';

    // Stores the converted value from the user input
    let result_M2I;
    // let error_message_M2I;

    // Logic for conversion direction
    if (metricConversion) {
        switch (metricConversion) {
            case 'inchesToCentimeters':
                result_M2I = inputValue_M2I * inchesToCentimeters;
                break;
            case 'feetToMeters':
                result_M2I = inputValue_M2I * feetToMeters;
                break;
            case 'milesToKilometers':
                result_M2I = inputValue_M2I * milesToKilometers;
                break;
            case 'ouncesToGrams':
                result_M2I = inputValue_M2I * ouncesToGrams;
                break;
            case 'poundsToKilograms':
                result_M2I = inputValue_M2I * poundsToKilograms;
                break;
            case 'fluidOuncesToMilliliters':
                result_M2I = inputValue_M2I * fluidOuncesToMilliliters;
                break;
            case 'gallonsToLiters':
                result_M2I = inputValue_M2I * gallonsToLiters;
                break;
            case 'fahrenheitToCelsius':
                result_M2I = fahrenheitToCelsius(inputValue_M2I);
                break;
            default:
                result_M2I = '';
                break;
        }
    } else {
        result_M2I = 'Conversion Error';
    };

// Checks if user make invalid value
if(isNaN(result_M2I)) {
    // Gives error message
    document.getElementById('error-message-M2I').textContent = (error_message_M2I);
    return;
} else {
    // Gets rid of error message
    document.getElementById('error-message-M2I').textContent = ''
};

// Displaying results
if (typeof result_M2I !== 'number') {
    // Handle case where the conversion type is not recognized or result is not a number
    document.getElementById('result-M2I').textContent = result_M2I; // Display the error message
} else {
    // Convert the result to a string with two decimal places
    const formattedResult_M2I = result_M2I.toFixed(2);

    // Checking if slangTerms object has a property with the key metricConversion
    if (slangTerms.hasOwnProperty(metricConversion)) {
        // Display the formatted result along with the appropriate conversion term
        document.getElementById('result-M2I').textContent = `${formattedResult_M2I} ${slangTerms[metricConversion]}`;
    } else {
        // Handle case where the conversion type is recognized but slang term is missing
        document.getElementById('result-M2I').textContent = 'Invalid Conversion Term';
    }
}});



// setting up callback function for button
const convertButton_I2M = document.getElementById('convertButton-I2M');
convertButton_I2M.addEventListener('click', () => {

    // Gathering user input
    const imperialConversion = document.getElementById('imperialConversion').value;

    // Using parseFloat to ensure the users input is treated as a number
    // Allows us to preform mathematical calculations correctly  
    const inputValue_I2M = parseFloat(document.getElementById('inputValue-I2M').value);

    // Error message if user enter invalid value or no value
    const error_message_I2M = 'Enter A Value';

    // Stores the converted value from the user input
    let result_I2M;

    // Logic for Imperial to Metric conversion
    if (imperialConversion) {
        switch (imperialConversion) {
            case 'centimetersToinches':
                result_I2M = inputValue_I2M / inchesToCentimeters;
                break;
            case 'metersToFeet':
                result_I2M = inputValue_I2M / feetToMeters;
                break;
            case 'kilometersToMiles':
                result_I2M = inputValue_I2M / milesToKilometers;
                break;
            case 'gramsToOunces':
                result_I2M = inputValue_I2M / ouncesToGrams;
                break;
            case 'kilogramsToPounds':
                result_I2M = inputValue_I2M / poundsToKilograms;
                break;
            case 'millilitersToFluidOunces':
                result_I2M = inputValue_I2M / fluidOuncesToMilliliters;
                break;
            case 'litersToGallons':
                result_I2M = inputValue_I2M / gallonsToLiters;
                break;
            case 'celsiusToFahrenheit':
                result_I2M = (inputValue_I2M * 9 / 5) + 32;
                break;
            default:
                result_I2M = '';
                break;
        }
    } else {
        result_I2M = 'Conversion Error';
    };

// Checks if user make invalid value
if(isNaN(result_I2M)) {
    // Gives error message
    document.getElementById('error-message-I2M').textContent = (error_message_I2M);
    return;
} else {
    // Gets rid of error message
    document.getElementById('error-message-I2M').textContent = ''
};

// Displaying results
if (typeof result_I2M !== 'number') {
    // Handle case where the conversion type is not recognized or result is not a number
    document.getElementById('result-I2M').textContent = result_I2M; // Display the error message
} else {
    // Convert the result to a string with two decimal places
    const formattedResult_I2M = result_I2M.toFixed(2);

    // Checking if slangTerms object has a property with the key imperialConversion
    if (slangTerms.hasOwnProperty(imperialConversion)) {
        // Display the formatted result along with the appropriate conversion term
        document.getElementById('result-I2M').textContent = `${formattedResult_I2M} ${slangTerms[imperialConversion]}`;
    } else {
        // Handle case where the conversion type is recognized but slang term is missing
        document.getElementById('result-I2M').textContent = 'Invalid Conversion Term';
    }
}});