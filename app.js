function saveToLocalStorage(e) {
  e.preventDefault();
  const name = e.target.username.value;
  const email = e.target.emailId.value;
  const phonenumber = e.target.phonenumber.value;

  const obj = {
    name,
    email,
    phonenumber,
  };
  // localStorage.setItem(obj.email, JSON.stringify(obj));
  // showNewUserOnScreen(obj);

  axios
    .post(
      "https://crudcrud.com/api/1dbc309b412e4b98ad7c73a56382282d/appointmentData",
      obj
    )
    .then((response) => {
      showNewUserOnScreen(response.data);
      console.log(response);
    })
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localStorageKeys = Object.keys(localStorageObj);
  // console.log(localStorageKeys);

  for (let i = 0; i < localStorageKeys.length; i++) {
    const key = localStorageKeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailsObj = JSON.parse(userDetailsString);
    showNewUserOnScreen(userDetailsObj);
  }
});

function showNewUserOnScreen(user) {
  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
  <button onclick=deleteUser('${user.email}')> Delete User </button>
</li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteUser(emailId) {
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId) {
  const parentNode = document.getElementById("listOfUsers");
  const childNodeToBeDeleted = document.getElementById(emailId);

  parentNode.removeChild(childNodeToBeDeleted);
}
