let loginForm = document.getElementById("login-form");

function signup(e) {
    e.preventDefault();

    let email = loginForm.email.value;
    let password = loginForm.password.value;
    
    const user = {
        email,
        password,
    }
    
    let array = JSON.parse(localStorage.getItem('user')) 
    console.log('array:', array)
    console.log('user:', user)
    
    let flag = true
    for (let i = 0; i < array.length; i++){
        if ((array[i].email === user.email) && (array[i].password === user.password)) {
            window.location.href = "home.html"
            flag = false
            break;
        }
    }
    if (flag) {
        alert("Invalid Credentials");
        location.reload();
    }
}