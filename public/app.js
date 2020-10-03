let ham = document.querySelector("#ham");
let hamclose = document.querySelector("#close");
let nav = document.querySelector("#nav");
let body = document.querySelector("body");

ham.addEventListener("click", () => {
  ham.style.display = "none";
  hamclose.style.display = "block";
  nav.classList.add("block");
  nav.classList.remove("hidden");
  body.scroll(0);
});

hamclose.addEventListener("click", () => {
  hamclose.style.display = "none";
  ham.style.display = "block";
  nav.classList.remove("block");
  nav.classList.add("hidden");
});
