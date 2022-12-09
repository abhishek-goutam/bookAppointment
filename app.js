var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit',bookAppointment);

function bookAppointment(e){
e.preventDefault();
var userName = document.getElementById('name').value;
var userEmail = document.getElementById('email').value;
const localStorageContent = localStorage.getItem("userDetails");
let userDetails;
let x ={
    "userName":userName,
    "userEmail":userEmail
}
if(localStorageContent == null){
    userDetails =[];
}else{
    userDetails = JSON.parse(localStorageContent);
}
userDetails.push(x);
localStorage.setItem("userDetails",JSON.stringify(userDetails))


var li = document.createElement("li");
li.className = "list-group-item";
li.appendChild(document.createTextNode(userName));
li.appendChild(document.createTextNode(userEmail)); 
var deleteBtn = document.createElement("button");
var editBtn = document.createElement("button");
editBtn.className = "btn btn-danger btn-sm float-right edit";
editBtn.appendChild(document.createTextNode("Edit"));
li.appendChild(editBtn);
deleteBtn.className = "btn btn-danger btn-sm float-right delete";
deleteBtn.appendChild(document.createTextNode("X"));
li.appendChild(deleteBtn);

itemList.appendChild(li);




}
