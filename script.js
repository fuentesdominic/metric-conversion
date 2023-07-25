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
        const conversionType = document.getElementById('conversionType').value;
        const conversionDirection = document.getElementById('conversionDirection').value;

        // Using parseFloat to ensure the users input is treated as a number
        // Allows us to preform mathematical calculations correctly  
        const inputValue = parseFloat(document.getElementById('inputValue').value);
        
        let result;
        
        // Logic for conversion direction
        if (conversionDirection === 'metricToImperial') {
            
        } else {
            
        };

        // Displaying results 
        // Using toFixed displays the result with decimal places to only two, e.g. "10.88"
        document.getElementById('result').textContent = result.toFixed(2)
    
    });


