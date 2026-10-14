const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(toggle && nav){

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("active");
        toggle.setAttribute("aria-expanded", isOpen);
    });

}