const cartCount = document.getElementById("cartCount");
const toastText = document.getElementById("toastText");
const cartToast = bootstrap.Toast.getOrCreateInstance(document.getElementById("cartToast"), { delay: 2200 });
let itemsInCart = 0;

document.querySelectorAll(".btn-add").forEach(addButton => {
  addButton.addEventListener("click", () => {
    itemsInCart++;
    cartCount.textContent = itemsInCart;
    toastText.textContent = addButton.dataset.name + " added to cart.";
    cartToast.show();
  });
});

const contactForm = document.getElementById("contactForm");
const formAlert = document.getElementById("formAlert");

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  formAlert.classList.add("d-none");

  if (!contactForm.checkValidity()) {
    contactForm.classList.add("was-validated");
    return;
  }

  contactForm.reset();
  contactForm.classList.remove("was-validated");
  formAlert.classList.remove("d-none");
});

const viewportSize = document.getElementById("viewportSize");

function showViewportSize() {
  viewportSize.textContent = window.innerWidth + " x " + window.innerHeight + " px";
}

window.addEventListener("resize", showViewportSize);
showViewportSize();