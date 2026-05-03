/*
  Assignment: Persistent Storage Updates
  Author: John Tenney
  Date: May 3, 2026
  Purpose: This script adds a modal window, tooltip support,
  dark mode persistence using localStorage, and dynamic DOM updates.
*/

// Run the script after the page content has loaded.
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // Modal Window Functionality
  // =========================
  const modal = document.getElementById("welcome-modal");
  const closeModalButton = document.getElementById("close-modal");

  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // =========================
  // Dark Mode Persistence
  // =========================
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Check localStorage for saved preference.
  const darkModeEnabled = localStorage.getItem("darkMode");

  if (darkModeEnabled === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  // Toggle dark mode and save preference.
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
// Dynamically add a notification message to the top of the page.
  setTimeout(function () {
    const notification = document.createElement("div");
    notification.className = "page-notification";
    notification.textContent = "Welcome! This page now includes JavaScript DOM updates for Week 3.";

    document.body.insertBefore(notification, document.body.firstChild);
  }, 1000);

  // Modify existing elements on the page.
  const mainHeading = document.querySelector("main section h1");
  const projectsHeading = document.getElementById("projects-heading");

  mainHeading.textContent = "Welcome to My JavaScript Webpage!";
  mainHeading.style.color = "#2f5f85";

  projectsHeading.textContent = "My Class Projects";
  projectsHeading.classList.add("highlight-heading");

  // Add a new project message.
  const projectsSection = document.getElementById("projects");
  const newProjectMessage = document.createElement("p");

  newProjectMessage.className = "new-project-message";
  newProjectMessage.textContent = "Recent Project: For Week 3, I added JavaScript that changes page content and responds to form submissions.";

  projectsSection.appendChild(newProjectMessage);

  // Contact form submission message.
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formMessage = document.getElementById("form-message");

    if (!formMessage) {
      formMessage = document.createElement("p");
      formMessage.id = "form-message";
      contactForm.appendChild(formMessage);
    }

    formMessage.textContent = "Sending message...";
    formMessage.className = "sending-message";

    setTimeout(function () {
      formMessage.textContent = "Message sent successfully!";
      formMessage.className = "success-message";
      contactForm.reset();
    }, 2500);
  });
});
