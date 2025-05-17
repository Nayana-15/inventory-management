// js/vendor.js

document.addEventListener("DOMContentLoaded", function () {
  const inventoryForm = document.querySelector("form");

  if (inventoryForm) {
    inventoryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Inventory updated successfully!");
    });
  }
});
