import db from '../database/db.js';

const get_products_by_category = db.prepare(/*sql*/ `
select p.id, p.name, p.price, p.description, p.size, p.colour
FROM    products p
JOIN product_category pc ON p.id = pc.product_id
WHERE pc.category_id = $categoryId
`);

export function retrieveProductsByCategory(categoryId) {
    return get_products_by_category.all({categoryId})
}

