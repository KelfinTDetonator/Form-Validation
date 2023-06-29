const form = document.getElementById('form');
const uname = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPw = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () =>{
    const usernameValue = uname.value.trim();   //trim itu untuk ngehapus space yang tersisa, agar outputnya hanya string nya aja
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPwValue = confirmPw.value.trim();

    if(usernameValue === ''){ //kalo username kosong, otomatis error
        setError(uname, 'Username is required'); //error
    } else if(usernameValue.length < 4){
        setError(uname, 'Username must be at least 4 characters')
    } 
    else{
        setSuccess(uname); //berhasil
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if (!isValidEmail) {
        setError(email, 'Provide a valid email address');
    } else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 characters')
        } else{
            setSuccess(password);
        }
    
    if(confirmPwValue === ''){
        setError(confirmPw, 'Please confirm your password');
    } else if(confirmPwValue !== passwordValue){
        setError(confirmPw, 'Passwords does not match')
    } else {
        setSuccess(confirmPw);
    }
}

const setError = (element, message) =>{
    const inputControl = element.parentElement; /*.parentElement ini untuk mengetahui parent dari suatu elemen, 
                                                   contoh ketika password error.. parentnya adalah div.input-control */

    const errorDisplay = inputControl.querySelector('.error'); /*memilih elemen (di kasus ini elemen div pada html) dengan class 'error' pada 
                                                                 parent div.input-control yang sama*/

    errorDisplay.innerText = message; //nampilin error nya apa pada div.error
    inputControl.classList.add('error'); //tambahin kelas error, supaya tampil message error nya dibantu css (pewarnaan merah).
    inputControl.classList.remove('success'); //success dihapus kalo ada error, ofc
}

const setSuccess = element =>{
    const inputControl = element.parentElement; /*.parentElement ini biar tau parent dari suatu elemen, contohnya kalo password error.. 
    parentnya itu div.input-control, div.input-control ini dipindahin ke const InputControl biar bisa di edit js buat nambahin class error/success */
    const errorDisplay = inputControl.querySelector('.error'); //checking dulu masih ada error apa engga

    errorDisplay.innerText = ''; //kalo udh gada error ya ofc, error message kosong
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

