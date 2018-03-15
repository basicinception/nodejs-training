exports.up = (knex, Promise) => {
  return knex.schema.createTable("posts", table => {
    table.increments();
    table.string("title");
    table.string("body");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("posts");
};
