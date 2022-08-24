let letters = 'abcdefghijklmnopqrstuvwxyz' 
let numbers = '1234567890' 
let specialCharacters = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

let button = document.getElementById("generate")
    .addEventListener('click', passgen);

    function passgen() {
        pass = '';
        val = '';
        confirm("Do you want to create a new password?");
        let length = prompt("How long do you want it to be 8-128");
        let lowercase = confirm("Do you want to have lowercase letters?");
        let uppercase = confirm("Do you want to have uppercase letters?");
        let numeric =   confirm("Do you want to include numbers?");
        let special =   confirm("Do you want to include special characters?");


    if (lowercase) {
        val += letters.toLowerCase();
    };

    if (uppercase) {
        val += letters.toUpperCase();
    };

    if (numeric) {
        val += numbers;
    };

    if (special) {
        val += specialCharacters;        
    };
    
            

    for (let a = 0; a < length; ++a) {
        pass += val [Math.floor(Math.random() * val.length)];
            
    };
    
        document.getElementById("password").innerHTML = pass;
};



    
    
    

