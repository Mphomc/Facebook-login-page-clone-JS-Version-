const form = document.getElementById("login-form")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value;

    if(!login || !password) return alert("Both field required!");

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

