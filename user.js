function update(){
    const token=localStorage.getItem('token');
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var roll=document.getElementById('roll').value;

    const data_to_api={
        name: name,
        email: email,
        roll: roll
    }

    fetch('http://localhost:3000/api/user/updateUser', {
       method: "POST",
       body: JSON.stringify(data_to_api),
       headers: { "Content-type": "application/json; charset=UTF-8",
                   "auth-token":token,
                   "email": email
   }
   })
        //.then(response => response.json())
       // .then(json => console.log(json))
       .then(function(response) {
           console.log(response);
           if(response.status==400){
               alert('Wrong Details');
           } 
           else{
               console.log(response);              
               return response.text();
           }
       })
       .then(function(text) {
           if(text==token){
               alert('Details Updated');
               location.replace("./Main.html");
           }
           else{
            alert("Try Again");
           }
           return console.log(text);
       })
       .catch(err => console.log(err))
      alert('Submit Form?');
   
}