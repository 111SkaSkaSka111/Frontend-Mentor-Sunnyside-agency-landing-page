const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
});

// Tambahkan event listener pada document
document.addEventListener("click", function (event) {
    // Periksa apakah elemen yang diklik bukan bagian dari menu atau toggle
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        // Jika bukan, hilangkan class "active" dari toggle dan menu
        toggle.classList.remove("active");
        menu.classList.remove("active");
    }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});
