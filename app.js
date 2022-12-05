var userDetails = document.getElementById('addForm');

userDetails.addEventListener('submit',bookAppointment);

function bookAppointment(e){
e.preventDefault();
var userName = document.getElementById('name').value;
var userEmail = document.getElementById('email').value;
console.log(userName,userEmail)

var userDetails ={
    'userName':userName,
    'userEmail':userEmail
}
localStorage.setItem('userName',userName);
localStorage.setItem('userEmail',userEmail);

}