var InputName;
var InputSurname;
var InputAge;
var InputEmail; 
var InputPassword1; 
var InputPassword2;
var userDetails = [];

function validate(){
    
    InputName = document.getElementById("InputName").value;
    InputSurname = document.getElementById("InputSurname").value;
    InputAge = document.getElementById("InputAge").value;
    InputEmail = document.getElementById("InputEmail").value;
    InputPassword1 = document.getElementById("InputPassword1").value;
    InputPassword2 = document.getElementById("InputPassword2").value;
    if (InputName === "" || InputSurname === "" || InputAge === "" || InputEmail === "" || InputPassword1 === "" || InputPassword2 === "" ) {
        alert("Please fill in all fields please");
    } else if (InputPassword1 === InputPassword2){
        userDetails = [InputName, InputSurname, InputAge, InputEmail, InputPassword1, InputPassword2];
        alert("Successfuly Registered!");
    } else {
        alert("Passwords do not match!");
    }

    console.log(userDetails);
}

