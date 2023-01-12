const form = document.getElementById('form');
const mail = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const emailValue = email.value.trim();

    if(email === '' || !isValidEmail(emailValue)){
        alert("Input valid email");
    } else{
        form.innerHTML = "Thank you!";
                  
    }
    
}


