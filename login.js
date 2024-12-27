import { baseUrl } from "./baseUrl.js";

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
 
  
  fetch(`${baseUrl}/user`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el, i) => el.email == email);
      if (user.length != 0) {
      
        if(user[0].password == password){
            alert("Login Sucess...");
            localStorage.setItem("loginData", JSON.stringify(user[0]))
            
        }else{
            alert("Password is wrong, please login with right password")
        }
        
      } else {
       
        alert("User not registred, Please signup....");
        window.location.href = "signUp.html"
        
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong, Please try again later");
    });
});
