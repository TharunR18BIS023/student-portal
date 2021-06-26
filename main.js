$(function() {
    const token=localStorage.getItem('token');
    fetch('http://localhost:3000/api/posts', {
       method: "GET",
       headers: { "Content-type": "application/json; charset=UTF-8",
                   "auth-token":token
   }
   })
       // .then(response => response.json())
       // .then(json => console.log(json))
       .then(function(response) {
           if(response.status==400){
               alert('Wrong Details');
           } 
           else{              
               return response.text();
           }
       })
       .then(function(text) {
            var obj=JSON.parse(text);
            var name= '<div style="border-radius:50px;padding: 40px;border: 2px solid red;background-color:aquamarine;" class="container"><b><p>Name: '+obj.name+'</p><p>Email: '+obj.email+'</p><p>Roll Number: '+obj.roll+'</p></b></div>';
            $("body").append(name);
           return console.log(obj);
       })
       .catch(err => console.log(err))
   return false;
});


function sem(){
    const token=localStorage.getItem('token');
    fetch('http://localhost:3000/api/posts/sem', {
       method: "GET",
       headers: { "Content-type": "application/json; charset=UTF-8",
                   "auth-token":token
   }
   })
       // .then(response => response.json())
       // .then(json => console.log(json))
       .then(function(response) {
           if(response.status==400){
               alert('Wrong Details');
           } 
           else{              
               return response.text();
           }
       })
       .then(function(text) {
           if(text=="No sgpa"){
               alert('No marks found redircting to update portal');
               location.replace("./update.html");
           }
           else{
            location.replace("./semester.html");
           }
           return console.log(text);
       })
       .catch(err => console.log(err))
   return false;
}

function getCookie() {
    const token=localStorage.getItem('token');
    console.log(token);
}