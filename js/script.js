console.log("ShopEasy Loaded");

const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});