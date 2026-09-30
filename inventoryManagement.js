// Write your code here
// Task 2: Create the Product Inventory Array (Capitalized to match the test expectations)
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Task 3: Access Product Information
function logFirstProduct() {
    console.log(products[0]);
}

// Task 4: Add a Product
function addProduct(productName) {
    products.push(productName);
}

// Task 5: Update Product Information
function updateProductName(position, newName) {
    products[position] = newName;
}

// Task 6: Remove a Product
function removeLastProduct() {
    products.pop();
}

// Export the functions so the test file can read them
module.exports = {
    products,
    logFirstProduct,
    addProduct,
    updateProductName,
    removeLastProduct
};


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};