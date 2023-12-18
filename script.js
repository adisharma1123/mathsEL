
function validateSignup() {
  var newUsername = document.getElementById("newUsername").value;
  var newPassword = document.getElementById("newPassword").value;

  // Implement your sign-up validation logic here.
  // For simplicity, we'll assume successful sign-up and just show an alert.
  alert("Sign Up successful!");
  return true;
}
// Array to store multiple user credentials
const users = [
  { username: "adityasharma", password: "aditya123" },
  { username: "meharkulkarni", password: "mehar123" },
  { username: "aryanchaturvedi", password: "aryan123" },
  { username: "tanishaagarwal", password: "tanisha123" },
  { username: "bhaktivyas", password: "bhakti123" },
  { username: "sagariaravind", password: "sagari123" }





  // Add more users as needed
];

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Check if the provided username and password match any user in the users array
  const foundUser = users.find(user => user.username === username && user.password === password);
  
  if (foundUser) {
    // Successful login, redirect to a new page or do other actions.
    alert("Login successful!");
    return true;
  } else {
    // Failed login, show an error message.
    document.getElementById("error").innerHTML = "Invalid username or password";
    return false;
  }
}


