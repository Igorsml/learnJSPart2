const buttonTogglePassword = document.body.querySelector(
  "[data-toggle-password]"
);

function togglePasswordVisibility() {
  const password = document.body.querySelector("#password");

  if (password.value.length && password.type === "password") {
    password.type = "text";
    buttonTogglePassword.textContent = "Hide Password";
  } else {
    password.type = "password";
    buttonTogglePassword.textContent = "Show Password";
  }
}

let fieldCounter = 2;

function addInputField() {
  const inputFields = document.body.querySelector("#inputFields");
  let newField = document.createElement("input");

  newField = {
    type: "text",
    name: `Field ${fieldCounter}`,
    placeholder: `Field # ${fieldCounter}`,
  };

  inputFields.appendChild(newField);
  fieldCounter++;
}
