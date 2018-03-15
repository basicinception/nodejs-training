exports.up = (knex, Promise) => {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("username");
    table.string("name");
    table.string("password");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("users");
};
