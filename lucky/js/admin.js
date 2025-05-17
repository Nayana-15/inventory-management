// js/admin.js

document.addEventListener("DOMContentLoaded", function () {
  const categoryForm = document.getElementById("categoryForm");
  const categoryList = document.getElementById("categoryList");

  if (categoryForm) {
    categoryForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const categoryId = document.getElementById("categoryId").value.trim();
      const categoryName = document.getElementById("categoryName").value.trim();

      if (!categoryId || !categoryName) {
        alert("Please enter both Category ID and Name.");
        return;
      }

      // Display in list (optional demo storage)
      const li = document.createElement("li");
      li.textContent = `ID: ${categoryId} - Name: ${categoryName}`;
      categoryList.appendChild(li);

      alert("Category added successfully!");

      categoryForm.reset();
    });
  }
});
