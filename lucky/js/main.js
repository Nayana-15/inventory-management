// js/main.js

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const role = document.getElementById("role").value;

      // Basic validation (you can enhance this later)
      if (!username || !password) {
        alert("Please enter username and password.");
        return;
      }

      // Redirect based on role
      if (role === "admin") {
        window.location.href = "admin/dashboard.html";
      } else if (role === "vendor") {
        window.location.href = "vendor/dashboard.html";
      } else if (role === "user") {
        window.location.href = "user/cart.html";
      }
    });
  }
});
