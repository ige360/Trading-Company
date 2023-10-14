const burger = document.querySelector(".burger");
const navlinks = document.querySelector("ul");

burger.addEventListener("click", () => {
    navlinks.classList.toggle("active")
})