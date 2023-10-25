const db = require('../../database/db.js');

const get_variant_count = db.prepare(/*sql*/ `
    SELECT
        name,
        COUNT(id) AS variants
    FROM products
    GROUP BY name
    HAVING variants > 1
`);

function retrieveVariants() {
  return get_variant_count.all().map((row) => row.name);
}

const get_variant_details = db.prepare(/*sql*/ `
    SELECT id, name, price, description, colour, image
    FROM products
    WHERE name = ?

`);

function retrieveVariantDetails(name) {
  return get_variant_details.all(name);
}

module.exports = { retrieveVariants, retrieveVariantDetails };
