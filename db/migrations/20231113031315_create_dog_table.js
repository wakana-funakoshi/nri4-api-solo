/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("dogs", function(table) {
    table.increments("id").primary();
    table.string("breeds_of_dogs", 64).notNullable();
    table.string("country_of_origin", 64);
    table.string("color", 32);
    table.integer("size");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("dogs");
};
