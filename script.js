// add logic for imperial system 
// add logic for metric system 

// setting up callback function for button
const convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', () => {

        // Gathering user input
        const conversionType = document.getElementById('conversionType').value;
        const conversionDirection = document.getElementById('conversionDirection').value;
        
        // Using parseFloat to ensure the users input is treated as a number
        // Allows us to preform mathematical calculations correctly  
        const inputValue = parseFloat(document.getElementById('inputValue').value);
    });

    let result;

