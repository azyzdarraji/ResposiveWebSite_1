// Contact form: Bootstrap validation + demo success message (nothing is sent).
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stay on the page

    if (!form.checkValidity()) {
        form.classList.add("was-validated"); // Bootstrap shows the red messages
        success.classList.add("d-none");
        return;
    }

    form.classList.remove("was-validated");
    form.reset();
    success.classList.remove("d-none");
});

// Close the burger menu after a click on a link (small screens).
document.querySelectorAll("#mainNav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        const menu = document.getElementById("mainNav");
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
