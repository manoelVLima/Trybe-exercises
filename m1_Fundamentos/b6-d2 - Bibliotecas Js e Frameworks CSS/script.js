const submitButton = document.querySelector("#submitButton");
const clearButton = document.querySelector("#clearButton");
const getInputs = document.querySelectorAll("input");
const textArea = document.querySelector("#textarea");
const agreeTwoCheckBox = document.querySelector("#agreeTwo");

window.onload = function () {
  clearButton.addEventListener("click", () => {
    for (let i = 0; i < getInputs.length; i += 1) {
      getInputs[i].innerHTML = "";
      getInputs[i].checked = false;
    }
    textArea.innerHTML = "";
  });
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
  agreeTwoCheckBox.addEventListener("change", () => {
    submitButton.disabled = !agreeTwoCheckBox.checked;
  });
};
