const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function checkFilled(){
  let input = document.getElementById("formInput");
  if(input == ""){
    input.style.backgroundColor = "#00FA9A";
  }
}

function checkEmail(){
  let email = document.getElementById('email')
  let regEmail = "/[gmail.com,yahoo.com,outlook.com,aol.com,icloud.com]/u"
  if(!email.includes(regEmail)){
    email.parentElement.borderColor = "red";
  }
}
input.email.addEventListener('afterinput', checkEmail)

input.addEventListener("change", checkFilled);