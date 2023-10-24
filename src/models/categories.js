const db = require('../../database/db.js');

const get_all_categories = db.prepare(/*sql*/ `
    select id, name
    FROM categories
`);

function retrieveAllCategories() {
  return get_all_categories.all();
}

module.exports = {retrieveAllCategories}