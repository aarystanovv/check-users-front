document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    const user = {
      username: username,
      password: password,
  };
  
    
    fetch("https://arystanov.pythonanywhere.com/api/token/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
      if(response.ok){

        response.json()
          .then(data => {
            localStorage.setItem("refresh", data.refresh);
            localStorage.setItem("access", data.access);
            localStorage.setItem("username", username);
            // console.log(localStorage.getItem("refresh"));
            // console.log(localStorage.getItem("access"));
          })
      alert('Login successful!');
      window.location.href = "welcome.html";

      }else{
        alert('Login failed. Please check your username and password.');
      }
    })
    .catch(error => {
        
        alert("An error occurred. Please try again later.");
        console.error(error);
    });
  
  });


