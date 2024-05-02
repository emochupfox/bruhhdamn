document.addEventListener("DOMContentLoaded", function() {
    // Sample product data (you can replace it with your actual data)
    const products = [
        { name: "Product 1", image: "product1.jpg", price: "$19.99" },
        { name: "Product 2", image: "product2.jpg", price: "$24.99" },
        { name: "Product 3", image: "product3.jpg", price: "$29.99" },
        { name: "Product 1", image: "product1.jpg", price: "$19.99" },
        { name: "Product 2", image: "product2.jpg", price: "$24.99" },
        { name: "Product 3", image: "product3.jpg", price: "$29.99" },
        { name: "Product 1", image: "product1.jpg", price: "$19.99" },
        { name: "Product 2", image: "product2.jpg", price: "$24.99" },
        { name: "Product 3", image: "product3.jpg", price: "$29.99" },
        { name: "Product 3", image: "product3.jpg", price: "$29.99" },
        { name: "Product 3", image: "product3.jpg", price: "$29.99" },
        { name: "Product 3", image: "product3.jpg", price: "$29.99" },
        // Add more product objects as needed
    ];

    const productList = document.getElementById("product-list");

    // Function to create HTML for a single product
    function createProductElement(product) {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;
        productElement.appendChild(imageElement);

        const nameElement = document.createElement("h2");
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);

        const priceElement = document.createElement("p");
        priceElement.textContent = "Price: " + product.price;
        productElement.appendChild(priceElement);

        return productElement;
    }

    // Function to render products on the page
    function renderProducts() {
        products.forEach(product => {
            const productElement = createProductElement(product);
            productList.appendChild(productElement);
        });
    }

    // Call renderProducts to display products
    renderProducts();
});
