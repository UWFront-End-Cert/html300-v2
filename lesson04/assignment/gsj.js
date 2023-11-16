// products and services link function
function prods() {
    
    const prodsLink = document.querySelector(".prods");
    const btn = document.querySelector("button");

    btn.addEventListener("click", function () {
    prodsLink.href = "prods-servs.html";
    })
}