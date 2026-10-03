let product = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1999,
        image: "/image/headphone.WEBP"
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 2499,
        image: "/image/smartwatch.WEBP"
    },

    {
        id: 3,
        name: "Mens T-Shirt",
        category: "Clothing",
        price: 499,
        image: "image/tshirt.JPG"
    },

    {
        id: 4,
        name: "Running Shoes",
        category: "Footwear",
        price: 1299,
        image: "image/shoes.JPG"
    },

    {
        id: 5,
        name: "Backpack",
        category: "Accessories",
        price: 899,
        image: "image/backbag.JPG"
    }
];


// Get HTML elements
let search = document.getElementById("search");
let categories = document.getElementById("categories");
let minPrice = document.getElementById("minPrice");
let maxPrice = document.getElementById("maxPrice");
let clearBtn = document.getElementById("clearBtn");

let productContainer = document.getElementById("productContainer");
let noProducts = document.getElementById("noProducts");
let productCount = document.getElementById("productCount");


// Display Products
function displayProducts(productList) {

    productContainer.innerHTML = "";

    // No products
    if (productList.length === 0) {

        noProducts.style.display = "block";
        productCount.textContent = "0 products found";

        return;
    }

    noProducts.style.display = "none";


    // Create product cards
    productList.forEach(function (product) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-details">

                <h3>${product.name}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <button class="view-btn">
                    View Product
                </button>

            </div>
        `;

        productContainer.appendChild(card);
    });


    // Product count
    productCount.textContent =
        `${productList.length} product(s) found`;
}



// FILTER FUNCTION
function filterProducts() {

    // Get values
    let searchValue = search.value.toLowerCase().trim();

    let categoryValue = categories.value;

    let minValue = minPrice.value;

    let maxValue = maxPrice.value;


    // Filter products
    let filteredProducts = product.filter(function (item) {

        // Search filter
        let searchMatch =
            item.name.toLowerCase().includes(searchValue);


        // Category filter
        let categoryMatch =
            categoryValue === "All Categories" ||
            item.category === categoryValue;


        // Minimum price
        let minMatch =
            minValue === "" ||
            item.price >= Number(minValue);


        // Maximum price
        let maxMatch =
            maxValue === "" ||
            item.price <= Number(maxValue);


        // All conditions must match
        return (
            searchMatch &&
            categoryMatch &&
            minMatch &&
            maxMatch
        );

    });


    // Display filtered products
    displayProducts(filteredProducts);
}



// SEARCH
search.addEventListener("input", function () {

    filterProducts();

});


// CATEGORY
categories.addEventListener("change", function () {

    filterProducts();

});


// MIN PRICE
minPrice.addEventListener("input", function () {

    filterProducts();

});


// MAX PRICE
maxPrice.addEventListener("input", function () {

    filterProducts();

});


// CLEAR FILTERS
clearBtn.addEventListener("click", function () {

    search.value = "";

    categories.value = "All Categories";

    minPrice.value = "";

    maxPrice.value = "";


    // Show all products
    displayProducts(product);

});


// Initial display
displayProducts(product);
