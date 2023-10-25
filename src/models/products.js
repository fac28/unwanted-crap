const db = require('../../database/db.js');

// list unique product names
const get_unique_product = db.prepare(/*sql*/ `
    SELECT
      DISTINCT name,
      price,
      description,
      size,
      colour,
      image
    FROM products
    GROUP BY name
`);

function retrieveUniqueProductNames() {
  return get_unique_product.all().map((row) => row.name);
}

function retrieveUniqueProducts() {
  const uniqueProducts = get_unique_product.all();
  return uniqueProducts.map((row) => ({
    ...row,
  }));
}

const get_all_products = db.prepare(/*sql*/ `
    SELECT id, name, price, description, size, colour, image
    FROM products
`);

function getAllProducts() {
  const allProducts = get_all_products.all();
  return allProducts.map((row) => ({
    ...row,
  }));
}

// Retrieve all product IDs
const get_all_product_ids = db.prepare(/*sql*/ `
    SELECT id
    FROM products
`);

function getAllProductIds() {
  const productIds = get_all_product_ids.all().map((row) => row.id);
  return productIds;
}

// Retrieve specific product data
const get_product_data = db.prepare(/*sql*/ `
    SELECT
        id,
        name,
        price,
        description,
        size,
        colour,
        image
    FROM products
    WHERE id = $id
`);

function retrieveProductData(id) {
  return get_product_data.get({ id });
}

module.exports = {
  retrieveUniqueProductNames,
  getAllProductIds,
  getAllProductIds,
  retrieveProductData,
  retrieveUniqueProducts,
  getAllProducts
};
