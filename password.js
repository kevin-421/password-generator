let char = "1234567890~”#$%&`()*+-./:;<=>?@[\^`{|}~"

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
   let pass = document.getElementById("password")
        getSelection(val);
    console.log(pass);
};

    

