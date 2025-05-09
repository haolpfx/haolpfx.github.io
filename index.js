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

document.querySelectorAll(".view-more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle content visibility
    const contents = button.parentElement.querySelectorAll(
      ".work-info-item-content"
    );
    contents.forEach((content) => content.classList.toggle("d-none"));
    // Re-layout the grid
    setTimeout(() => masonry.layout(), 0);
  });
});

const masonryContainer = document.querySelector(".masonry-container");
const masonry = new Masonry(masonryContainer, {
  itemSelector: ".masonry-item",
  columnWidth: ".masonry-item",
  percentPosition: true,
  gutter: 10, // 1rem = 10px
});