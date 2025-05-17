// js/user.js

document.addEventListener("DOMContentLoaded", function () {
  const cartList = document.getElementById("cart-list");

  if (cartList) {
    cartList.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        alert("Item removed from cart.");
      }
    });
  }
});
