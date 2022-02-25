document.querySelector("#showLogin").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .closeBtn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});