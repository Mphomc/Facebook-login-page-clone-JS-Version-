// Handling form submission

const form = document.getElementById("login-form")

form.addEventListener("click", function(event) {
    event.preventDefault();

    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value;

    //if(!login || !password) return alert("Both field required!");  

    // Sending data to servers
    async function load() {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login, password})

            
        });
        
        const data = await response.json();

        if(data.success){
            alert("login succssful");
            window.location.href= "/dashboard";
        } else {
            alert("login failed:" + data.message);
        }
    }  
  
});

// Handling forgot password link

const forgotlink = document.getElementById("forgot");

forgotlink.addEventListener("click", function(event) {
    event.preventDefault();

    const userEmail = prompt("Please enter your email address to reset your password:");
    if (userEmail) {
        alert(`Password reset link has been sent to ${userEmail}. (Simulated)`);
    } else {
        alert("You must enter an email or phone number.");
    }

});

// Handling create account link

const accountcreate = document.getElementById("new-account");

accountcreate.addEventListener("click", function(event) {
    event.preventDefault();

    const name = prompt("Enter your full name:");
    const email = prompt("Enter your email or mobile number:");
    const password = prompt("Enter your password:");

     if (name && email && password) {
        // Simulate account creation
        alert(`Account created successfully for ${name}! (Simulated)`);
    } else {
        alert("All fields are required to create an account.");
    }
    
    

});


