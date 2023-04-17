const open = document.querySelector("#open");
const modalbox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () =>{
    modalbox.classList.add("active");
});

close.addEventListener("click", () => {
    modalbox.classList.remove("active");
});