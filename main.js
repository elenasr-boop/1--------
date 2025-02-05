const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const agreeButton = document.getElementById("agreement");
const submitButton = document.getElementById("submit-button");
const agreeImg = document.getElementById("agree-img");
let isUserAgree = false;

window.onscroll = function() {   //изменение прозрачности шапки при прокрутке
  if (window.scrollY > 150) {
    document.documentElement.style.setProperty('--opacity', 1);
  }
  else {
    document.documentElement.style.setProperty('--opacity', 0); 
  }
}

agreeButton.addEventListener("change", () => {
  if (isUserAgree === false) {
    agreeImg.src = "./public/checkbox_true.png";
    isUserAgree = true;
  } else {
    agreeImg.src = "./public/checkbox_false.png";
    isUserAgree = false;
  }
})

submitButton.addEventListener("click", () => {
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("error");
  } else if (emailInput.value.trim() === "") {
    emailInput.classList.add("error");
  } else if (!isUserAgree) {
    alert("Dear user, you need to read a Privacy policy and accept it");
  } else {
    alert(`Dear user ${nameInput.value.trim()}, a letter with further instructions has been sent to your email ${emailInput.value.trim()}!`);
  }
})

nameInput.addEventListener("change", () => {
  nameInput.classList.remove("error");
})

emailInput.addEventListener("change", () => {
  emailInput.classList.remove("error");
})
