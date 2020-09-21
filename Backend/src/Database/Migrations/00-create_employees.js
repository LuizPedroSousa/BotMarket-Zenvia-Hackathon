exports.up = async (knex) => {
    return knex.schema.createTable('employees', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.boolean('status').notNullable();
        table.string('avatar');
    });
};

exports.down = async (knex) => {
    return knex.schema.dropTable('employees');
}