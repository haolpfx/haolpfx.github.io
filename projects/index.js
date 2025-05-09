const form = document.getElementById("form-contact");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const personalInfoElement =
    document.getElementsByClassName("personal-info")[0];
  const formContact = document.getElementById("form-contact");
  const formContactContainer = document.getElementsByClassName(
    "form-contact-container"
  )[0];
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let isMatch = email.match(regex);
  if (!personalInfoElement) {
    console.error("Email input not found");
    return;
  }
  if (!formContact) {
    console.error("Email input not found");
    return;
  }
  if (isMatch) {
    personalInfoElement.classList.remove("d-none");
    formContactContainer.classList.add("d-none");
  }
  form.reset();
});
