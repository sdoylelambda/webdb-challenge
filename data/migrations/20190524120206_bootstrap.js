
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
      table.increments();
      table.string('name', 256)
      .notNullable()
      .unique();
      table.string('description', 256)
      .notNullable()
      table.boolean('complete')
    //   table.boolean('complete', false)
      .notNullable()
      .default(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projectsTable')
};
