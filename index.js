const button = document.querySelector("#btn");
const thanksButton = document.querySelector("#thanks-btn");
const hiddenDiv = document.querySelector("#hiddenDiv");
const emailField = document.querySelector("#email");
const alertMessageField = document.querySelector("#alert-message");

console.log(emailField);

const alertMessage = () => {
  emailField.classList.add("alert");
  alertMessageField.classList.add("alert-message");
};

const resetMessage = () => {
  emailField.classList.remove("alert");
  alertMessageField.classList.remove("alert-message");
};

button.addEventListener("click", (e) => {
  let emailValue = e.currentTarget.form["email"].value;
  e.preventDefault();
  let isEmail = emailValue.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (isEmail !== null) {
    hiddenDiv.classList.remove("hidden");
  } else {
    alertMessage();
  }
});

emailField.addEventListener("input", () => {
  resetMessage();
});

thanksButton.addEventListener("click", () => {
  hiddenDiv.classList.add("hidden");
});
