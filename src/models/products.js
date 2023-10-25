const db = require('../../database/db.js');

// list unique product names
const get_unique_product_names = db.prepare(/*sql*/ `
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
  return get_unique_product_names.all().map((row) => row.name);
}

function retrieveUniqueProducts() {
  const uniqueProducts = get_unique_product_names.all();
  return uniqueProducts.map((row) => ({
    ...row,
  }));
}

// get info of the first variant of a product
const get_first_variant = db.prepare(/*sql*/ `
    SELECT id, name, price, image
      FROM products
      WHERE name = ?
      LIMIT 1;
`);

function getProductInfo(productName) {
  return get_first_variant.get(productName);
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
  getProductInfo,
  getAllProductIds,
  getAllProductIds,
  retrieveProductData,
  retrieveUniqueProducts,
};
