// TAB SWITCH
function showTab(tabName) {
  let tabs = document.querySelectorAll(".tab");
  let contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));

  if (tabName === "login") {
    tabs[0].classList.add("active");
    document.getElementById("login").classList.add("active");
  } else {
    tabs[1].classList.add("active");
    document.getElementById("signup").classList.add("active");
  }
}


// SIGNUP
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Signup successful!");
});


// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let savedEmail = localStorage.getItem("userEmail");
  let savedPassword = localStorage.getItem("userPassword");

  if(email === savedEmail && password === savedPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid credentials!");
  }
});