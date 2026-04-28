/*
  Assignment: Week 3 JavaScript DOM Updates
  Author: John Tenney
  Date: April 28, 2026
  Purpose: This script adds dynamic DOM updates, modifies existing page elements,
  and creates a timed confirmation message for the contact form.
*/

// Run the script after the page content has loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Dynamically add a notification message to the top of the page after a short delay.
  setTimeout(function () {
    const notification = document.createElement("div");
    notification.className = "page-notification";
    notification.textContent = "Welcome! This page now includes JavaScript DOM updates for Week 3.";

    document.body.insertBefore(notification, document.body.firstChild);
  }, 1000);

  // Use selectors to reference and modify existing elements on the page.
  const mainHeading = document.querySelector("main section h1");
  const projectsHeading = document.getElementById("projects-heading");

  mainHeading.textContent = "Welcome to My JavaScript Webpage!";
  mainHeading.style.color = "#2f5f85";

  projectsHeading.textContent = "My Class Projects";
  projectsHeading.classList.add("highlight-heading");

  // Dynamically add a new project paragraph to the Projects section.
  const projectsSection = document.getElementById("projects");
  const newProjectMessage = document.createElement("p");
  newProjectMessage.className = "new-project-message";
  newProjectMessage.textContent = "Recent Project: For Week 3, I added JavaScript that changes page content and responds to form submissions.";

  projectsSection.appendChild(newProjectMessage);

  // Add a timed confirmation message when the contact form is submitted.
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
