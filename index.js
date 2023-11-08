document.addEventListener("DOMContentLoaded", function () {
    const openMenu = document.querySelector(".open-menu");
    const closeMenu = document.querySelector(".close-menu");
    const menu = document.querySelector(".menu");
    const checkbox = document.getElementById("check");

    openMenu.addEventListener("click", function () {
        menu.style.right = "0";
        checkbox.checked = true;
    });

    closeMenu.addEventListener("click", function () {
        menu.style.right = "-100%";
        checkbox.checked = false;
    });
});
