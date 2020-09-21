exports.up = async (knex) => {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('code').unique().notNullable();
        table.string('image');
        table.string('category').notNullable();
        table.decimal('price').notNullable();
    });
};

exports.down = async (knex) => {
    return knex.schema.dropTable('products');
}