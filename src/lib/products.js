import db from "../database/db.js";

const get_all_products = db.prepare(/*sql*/ `
    SELECT id, name, price, description, size, colour
    FROM products
`);

export function retrieveAllProducts() {
  return get_all_products.all();
}


// Retrieve all product IDs
const get_all_product_ids = db.prepare(/*sql*/ `
    SELECT id
    FROM products
`);

export function getAllProductIds() {
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

export function retrieveProductData(id) {
  return get_product_data.get({ id });
}
