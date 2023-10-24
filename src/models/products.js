const db = require('../../database/db.js');

// list unqiue product names
const get_unique_product_names = db.prepare(/*sql*/ `
    SELECT DISTINCT name
    FROM products
`);

function retrieveUniqueProductNames() {
  return get_unique_product_names.all().map((row) => row.name);
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

// loop through unique products
const uniqueProductNames = retrieveUniqueProductNames();
uniqueProductNames.forEach((productName) => {
  const productInfo = getProductInfo(productName);
  // console.log(productInfo);
});

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
        colour
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
};