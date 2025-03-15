document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});