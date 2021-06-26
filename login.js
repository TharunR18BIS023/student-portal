function validateSignin(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;	
    var token;
    const data_to_api = {
        email: email,
        password: password
    }
     console.log(data_to_api);
     fetch('http://localhost:3000/api/user/login', {
        method: "POST",
        body: JSON.stringify(data_to_api),
        headers: { "Content-type": "application/json; charset=UTF-8"}
    })
        // .then(response => response.json())
        // .then(json => console.log(json))
        .then(function(response) {
            if(response.status==400){
                alert('Wrong Details');
            } 
            else{
                console.log(response);
                location.replace('./Main.html');
                return response.text();
            }
        })
        .then(function(text) {
            localStorage.setItem('token',text.toString());
            return console.log(text);
        })
        .catch(err => console.log(err))
    return false;
}
