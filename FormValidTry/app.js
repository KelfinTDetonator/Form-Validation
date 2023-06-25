const form = document.getElementById('form') // ???
const uname = document.getElementById('uname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPw = document.getElementById('confirmPw');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    
});

const validateInputs = () => {
    const username = uname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPwValue = confirmPw.value.trim();
    function test(input, min, max){
        if (input.value.length < min) {
          setError(input, `${getFieldName(input)} must be at least ${min} characters`);
        } else if (input.value.length > max) {
            setError(input,`${getFieldName(input)} must be less than ${max} characters`);
        } 
      }
    
      function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
      }

    if (username === ''){//!
        setError(uname, "Username is required"); //!
    } 
     else if (username !== ''){ //!
        test(uname, 3, 15); //!
     }

    if (emailValue === '') {
        setError(email, "Email is required")
    } else if(isValidEmail(email) === false){
        setError(email, "Enter a valid email address")
     } else if(isValidEmail){
        setSuccess(email);
      }

    if (passwordValue === '') {
        setError(password, "Passwords must be at least 8 characters");
    } else {
        setSuccess(password);
    }

    if(confirmPwValue === ''){
        setError(confirmPw, "Confirming Password is mandatory");
    } else if(confirmPwValue !== passwordValue){
        setError(confirmPw, "Password does not match");
        } else setSuccess(confirmPw);
}

const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const error = inputControl.querySelector('.error');

    error.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const error = inputControl.querySelector('.error');

    error.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');  
}

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email.value.match(re)){
        return false;
    }

// function checkRequired(arrOfInput){
//     let isRequired = false;
//     arrOfInput.forEach(input => {
//         if (input.value.trim() === '') {
//            setError(input, `${getFieldName} is required`); 
//            isRequired = true;
//         } else setSuccess(input);
//     });

//     return isRequired;
// }




//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//value.match(validRegex)
//   if (!validRegex.test(String(email).toLowerCase())) {
//     return true;
//   } else if(validRegex.test(String(email).toLowerCase())){
//     return false;
//   }
}