const userEmail = document.getElementById("email");

const userPassword1 = document.getElementById("texPwd");

const userPassword2 = document.getElementById("texCoPwd");

const form = document.querySelector("form");




const handleClick = (e) => {
    validateInput();
  };



const validateInput = () => {

  //EMAIL
  if (userEmail.value.trim() === "") {
    onError(userEmail, "Email cannot be empty");
  } else {
    if (!isValidEmail(email.value.trim())) {
      onError(userEmail, "Email is not valid");
    } else {
      onSuccess(userEmail);
    }
  }

  //PASSWORD -1
  if (userPassword1.value.trim() === "") {
    onError(userPassword1, "Password cannot be empty");
  } else {
    onSuccess(userPassword1);
  }

  //CONFIRM PASSWORD
  if (userPassword2.value.trim() === "") {
    onError(userPassword2, "Please re-enter your password");
  } else if (userPassword2.value != userPassword1.value) {
    onError(userPassword2, "Password do not match");
  } else {
    onSuccess(userPassword2);
  }
};



const onSuccess = (input) => {
  let parent = input.parentElement;
  let messageEl = parent.querySelector("span");
  messageEl.style.visibility = "hidden";
  messageEl.innerHTML = input;
};

const onError = (input, message) => {
  let parent = input.parentElement;
  let messageEl = parent.querySelector("span");
  messageEl.style.visibility = "visible";
  messageEl.style.color = "red";
  messageEl.innerHTML = message;
};

const isValidEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
