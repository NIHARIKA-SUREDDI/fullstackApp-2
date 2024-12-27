const navbar = () => {
    let card = `<div id="nav-container" >
         <a id="logo" href="index.html">My Personal App</a>
         <div id="nav-links" >
  
          <a href="signup.html"> Signup </a>
          <a href="login.html"> Login </a>
        
         </div>
      </div>`;
  
      document.getElementById("nav").innerHTML = card
      
  };
  
navbar();
  