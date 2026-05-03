/*
    Assignment: Persistent Storage
    Author: John Tenney
    Purpose:
    Adds modal functionality, tooltip support,
    and persistent dark mode using localStorage.
*/

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Modal Functionality
    // =========================

    const modal = document.getElementById("welcome-modal");

    const closeButton = document.getElementById("close-modal");

    closeButton.addEventListener("click", function () {

        modal.style.display = "none";

    });

    // =========================
    // Dark Mode Persistence
    // =========================

    const darkModeToggle = document.getElementById("darkModeToggle");

    // Check saved preference
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "enabled") {

        document.body.classList.add("dark-mode");

        darkModeToggle.checked = true;

    }

    // Toggle dark mode
    darkModeToggle.addEventListener("change", function () {

        if (darkModeToggle.checked) {

            document.body.classList.add("dark-mode");

            localStorage.setItem("darkMode", "enabled");

        } else {

            document.body.classList.remove("dark-mode");

            localStorage.setItem("darkMode", "disabled");

        }

    });

    // =========================
    // Form Submission Message
    // =========================

    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Message sent successfully!");

        contactForm.reset();

    });

});
