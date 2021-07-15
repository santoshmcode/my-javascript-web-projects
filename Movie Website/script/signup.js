let signUpForm = document.getElementById("signup-form");
function addUser(e) {
    e.preventDefault();

    let name = signUpForm.name.value;
    let number = signUpForm.number.value;
    let email = signUpForm.email.value;
    let password = signUpForm.password.value;

    if (name === "" || email === "" || password === "" || number === "") {
        alert("All fields are required");
    }

    const user = {
        name,
        number,
        email,
        password,
    };
    console.log("user:", user);

    let array;
    if (localStorage.getItem("user") === null) {
        array = [];
    } else {
        array = JSON.parse(localStorage.getItem("user"));
    }

    if (
        user.name !== "" &&
        user.number !== "" &&
        user.email !== "" &&
        user.password !== ""
    ) {
        let flag = true;
        for (let i = 0; i < array.length; i++) {
            if (user.email === array[i].email) {
                flag = false;
                alert("Email already exists!");
                break;
            }
        }
        if (flag) {
            array.push(user);
            localStorage.setItem("user", JSON.stringify(array));
            alert("You SignUp successfully")
            window.location.href = "login.html"
        }
    }
    
}
