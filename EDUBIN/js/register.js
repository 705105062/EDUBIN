function clickRegister() {
    let user = {
        first_name: document.getElementById('first-name').value.trim(),
        last_name: document.getElementById('last-name').value.trim(),
        user_name: document.getElementById('user-name').value.trim(),
        email: document.getElementById('email').value.trim(),
        pass: document.getElementById('pass').value.trim(),
        pass_cf: document.getElementById('pass-cf').value.trim()
    }

    if(user.first_name.length === 0) { 
        alert("You have not entered first name !!"); 
        return;
    }
    if(user.last_name.length === 0) { 
        alert("You have not entered last name !!"); 
        return;
    }
    if(user.email.length === 0) { 
        alert("You have not entered email !!");
        return;
    }
    if(user.user_name.length === 0) { 
        alert("You have not entered user name !!"); 
        return;
    }
    if(user.pass.length === 0) { 
        alert("You have not entered password !!");
        return;
    }
    if(user.pass_cf.length === 0) { 
        alert("You have not entered pass confinmation !!"); 
        return;
    }
    if(user.pass_cf != user.pass) {
        alert("Password and Password Confinmation must be the same !!");
        return;
    }
    alert("Sign up successfully");
}