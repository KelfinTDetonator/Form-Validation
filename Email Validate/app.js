const emailField = document.getElementById('email-field');
const emailLabel = document.getElementById('email-label');
const emailError = document.querySelector('.error');

emailField.addEventListener('keyup', (e) => {
    e.preventDefault();
    validateEmail();
})

function validateEmail(){
    emailLabel.style.bottom = '45px';
    const emailValue = emailField.value.trim();
    let validEmail = isValidEmail(emailField);
    if(emailValue === ''){
        emailError.innerHTML = 'Email is required';
    } else if(validEmail === false){
        emailError.innerHTML = 'Please enter a valid email';
        
    } if(validEmail !== false){
        
        emailError.innerHTML = '';
    }
}

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email.value.match(re)){ //maksudnya klo email.value engga matching, berarti return salah
        emailField.style.borderBottom = '2px solid red';
        emailError.style.top = "110%"
       return false;
    } else {
        emailField.style.borderBottom = '2px solid green';
        emailError.style.top = "110%"
        return true;
    }
    
}