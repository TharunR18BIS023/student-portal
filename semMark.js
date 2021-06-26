$(function() {
    const token=localStorage.getItem('token');
    fetch('http://localhost:3000/api/posts/mark', {
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
            var name= '<div style="border-radius:50px;padding: 40px;border: 2px solid red;background-color:aquamarine;" class="container"><b><p>Name: '+obj.name+'</p><p>Roll Number: '+obj.roll+'</p><p>Semester 1: '+obj.sem1+'</p><p>Semester 2: '+obj.sem2+'</p><p>Semester 3: '+obj.sem3+'</p><p>Semester 4: '+obj.sem4+'</p><p>Semester 5: '+obj.sem5+'</p><p>Semester 6: '+obj.sem6+'</p><p>Semester 7: '+obj.sem7+'</p><p>Semester 8: '+obj.sem8+'</p></b></div>';
            $("body").append(name);
           return console.log(obj);
       })
       .catch(err => console.log(err))
   return false;
});

function open(){
    window.open("../src/update.html");
}