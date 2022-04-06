function checkPass() {
    const pass = document.getElementById('password');
    const passconfirm = document.getElementById('password-confirm');
    if (pass.value === passconfirm.value) {
        const inputForm = document.getElementById('password-confirm')
        inputForm.style.borderColor= 'rgb(146, 155, 167)';
        document.getElementById('submit-button').disabled =false;
        const errorDiv = document.querySelector('.error');
        errorDiv.textContent = ""
    }
    else {
        const inputForm = document.getElementById('password-confirm')
        inputForm.style.borderColor= 'red';
        console.log('nope')
        document.getElementById('submit-button').disabled = true;
        const errorDiv = document.querySelector('.error');
        errorDiv.textContent = "* Passwords don't match"
        
    }
}