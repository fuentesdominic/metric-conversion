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
        imperial_convert_C2I: 'inch(es)',
        imperial_convert_M2F: 'feet',
        imperial_convert_K2M: 'mile(s)',
        imperial_convert_G2O: 'ounce(s',
        imperial_convert_K2P: 'pound(s)',
        imperial_convert_M2FO: 'fluid ounce(s)',
        imperial_convert_L2G: 'gallon(s)',
        imperial_convert_C2F: 'Fahrenheit',
    // conserions slang for metric to imperial
        // metric_convert_I2C: 'centimeter(s)',
        inchesToCentimeters: 'centimeter(s)',
        metric_convert_F2M: 'meter(s)',
        metric_convert_M2K: 'kilometer(s)',
        metric_convert_O2G: 'gram(s)',
        metric_convert_P2K: 'kilogram(s)',
        metric_convert_FO2M: 'milliliter(s)',
        metric_convert_G2L: 'liter(s)',
        metric_convert_F2C: 'Celcius'
    } 
    

// setting up callback function for button
const convertButton_M2I = document.getElementById('convertButton-M2I');
    convertButton_M2I.addEventListener('click', () => {

        // Gathering user input
        const metricConversion = document.getElementById('metricConversion').value;

        // Using parseFloat to ensure the users input is treated as a number
        // Allows us to preform mathematical calculations correctly  
        const inputValue_M2I = parseFloat(document.getElementById('inputValue-M2I').value);
        
        // Stores the converted value from the user input
        let result_M2I;
        
        // Logic for conversion direction
        if (metricConversion) {
            switch (metricConversion) {
                case 'inchesToCentimeters' :
                    result_M2I = inputValue_M2I * inchesToCentimeters;
                    break;
                case 'feetToMeters' :
                    result_M2I = inputValue_M2I * feetToMeters;
                    break;
                case 'milesToKilometers' :
                    result_M2I = inputValue_M2I * milesToKilometers;
                    break;
                case 'ouncesToGrams' :
                    result_M2I = inputValue_M2I * ouncesToGrams;
                    break;
                case 'poundsToKilograms' : 
                    result_M2I = inputValue_M2I * poundsToKilograms;
                    break;
                case 'fluidOuncesToMilliliters' :
                    result_M2I = inputValue_M2I * fluidOuncesToMilliliters;
                    break;
                case 'gallonsToLiters' :
                    result_M2I = inputValue_M2I * gallonsToLiters;
                    break;
                case 'fahrenheitToCelsius' :
                    result_M2I = fahrenheitToCelsius(inputValue_M2I);
                    break;
                default:
                    result_M2I = 'Invalid Conversion Type';
                    break;
                    }
                } else {     
                    result_M2I = 'Conversion Error';
                };

        // Displaying results 
        if (typeof result_M2I !== 'number') {
            // handle case where the conversion type is not recongized
            document.getElementById('result-M2I').textContent = `${result_M2I} ${slangTerms[metricConversion]}`;
        } else {
            // Using toFixed displays the result with decimal places to only two, e.g. "10.88"
            document.getElementById('result-M2I').textContent = `${result_M2I.toFixed(2)} ${slangTerms[metricConversion]}`;
        };
    
    });


// setting up callback function for button
const convertButton_I2M = document.getElementById('convertButton-I2M');
    convertButton_I2M.addEventListener('click', () => {

        // Gathering user input
        const imperialConversion = document.getElementById('imperialConversion').value;

        // Using parseFloat to ensure the users input is treated as a number
        // Allows us to preform mathematical calculations correctly  
        const inputValue_I2M = parseFloat(document.getElementById('inputValue-I2M').value);

        // Stores the converted value from the user input
        let result_I2M;

        // Logic for Imperial to Metric conversion
        if (imperialConversion) {
            switch (imperialConversion) {
                case 'centimetersToinches' :
                    result_I2M = inputValue_I2M / inchesToCentimeters;
                    break;
                case 'metersToFeet' :
                    result_I2M = inputValue_I2M / feetToMeters;
                    break;
                case 'kilometersToMiles' :
                    result_I2M = inputValue_I2M / milesToKilometers;
                    break;
                case 'gramsToOunces' :
                    result_I2M = inputValue_I2M / ouncesToGrams;
                    break;
                case 'kilogramsToPounds' :
                    result_I2M = inputValue_I2M / poundsToKilograms;
                    break;
                case 'millilitersToFluidOunces' :
                    result_I2M = inputValue_I2M / fluidOuncesToMilliliters;
                    break;
                case 'litersToGallons' :
                    result_I2M = inputValue_I2M / gallonsToLiters;
                    break;
                case 'celsiusToFahrenheit' :
                    result_I2M = (inputValue_I2M * 9 / 5) + 32;
                    break;
                default :
                    result_I2M = 'Invalid Conversion Type';
                    break;
                    }
                } else {
                    result_I2M = 'Conversion Error';
                };

        // Displaying results
        if (typeof result_I2M !== 'number') {
            // handle case where the conversion type is not recongized
            document.getElementById('result-I2M').textContent = result_I2M;
        } else {
            // Using toFixed displays the result with decimal places to only two, e.g. "10.88"
            document.getElementById('result-I2M').textContent = result_I2M.toFixed(2);
        }

    });

// add the label for the result. e.g. output - 12.22FT(feet)