import db from '../database/db.js';

const get_all_categories = db.prepare(/*sql*/ `
select id, name
FROM category`)

export function retrieveAllCategories() {
    return get_all_categories.all()
}



