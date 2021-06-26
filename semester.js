function update(){
    const token=localStorage.getItem('token');
    var sem1=document.getElementById('sem1').value;
    var sem2=document.getElementById('sem2').value;
    var sem3=document.getElementById('sem3').value;
    var sem4=document.getElementById('sem4').value;
    var sem5=document.getElementById('sem5').value;
    var sem6=document.getElementById('sem6').value;
    var sem7=document.getElementById('sem7').value;
    var sem8=document.getElementById('sem8').value;
    if(sem1<0||sem1>10||sem2<0||sem2>10||sem3<0||sem3>10||sem4<0||sem4>10||sem5<0||sem5>10||sem6<0||sem6>10||sem7<0||sem7>10||sem8<0||sem8>10){
        alert("SGPA should be Between 0 and 10");
    }
    else{
    const data_to_api={
        sem1: sem1,
        sem2: sem2,
        sem3: sem3,
        sem4: sem4,
        sem5: sem5,
        sem6: sem6,
        sem7: sem7,
        sem8: sem8
    }

    fetch('http://localhost:3000/api/user/update', {
       method: "POST",
       body: JSON.stringify(data_to_api),
       headers: { "Content-type": "application/json; charset=UTF-8",
                   "auth-token":token
   }
   })
       // .then(response => response.json())
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
               alert('Marks Updated');
               location.replace("./Main.html");
           }
           else{
            alert("Try Again");
           }
           return console.log(text);
       })
       .catch(err => console.log(err));
   
}}

