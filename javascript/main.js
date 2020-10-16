// Main variables
let eMail = document.querySelector('#user_email');
let submitBtn = document.querySelector('.btn-submit');
let validateCode = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

submitBtn.addEventListener('click', checkInput);

function checkInput() {
    let msgError = document.querySelector('.error-msg');
    msgError.style.color = 'red'

    if (eMail.value == '') {
        msgError.innerHTML = 'Ops! It looks like you forgot to add your email address.';
        eMail.style.border = '1px solid var(--Light-Red)';
    } else if (eMail.value.match(validateCode)) {
        submitBtn.setAttribute('type', 'submit');
    } else {
        msgError.innerHTML = 'Please, provide a valid email address.';
        eMail.style.border = '1px solid var(--Light-Red)';
    }
}