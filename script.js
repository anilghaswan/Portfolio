const correct_username = "Anil";
const correct_username_second = "Ghaswan";
const correct_password = "1234";
const G_Mail = "ghaswananil56@gmail.com";

function submitForm() {
  let username = document.getElementById("fname").value;
  let username_second = document.getElementById("lname").value;
  let password = document.getElementById("password").value;
  let Gmail = document.getElementById("gmail").value;

  if (
    username === correct_username &&
    username_second === correct_username_second &&
    password === correct_password &&
    Gmail === G_Mail
  ) {
    alert("Your details were successfully submitted ✅");
  } else {
    alert("Invalid username or password ❌");
  }
}
