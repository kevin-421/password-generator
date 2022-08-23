let char = "abcdefghijklmnopqrstuvwxyz1234567890~”#$%&`()*+-./:;<=>?@[\^`{|}~"

let gen = document.getElementById("generate")
    .addEventListener('click', passgen );

function passgen() {
    confirm("Do you want to create a new password?");
    let length = prompt("How long do you want it to be 8-128"); 
    val = "";
    
    for (let a = 0; a < length; ++a) {
        val += char.charAt(Math.floor(Math.random() * char.length));
        return val;
        
    };
};

let case1 = document.getElementById("generate")
    .addEventListener('click', lowerCase );


function lowerCase () {
    confirm("Do you want to include lowercase?");
        let lower = "";
        
            if (confirm === confirm) {
                lower = char.toLowerCase;
            
            };
};


    
    

