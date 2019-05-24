
exports.seed = function(knex, Promise) {
  
  return knex("actions").insert([
    {
      project_id: "1",
      description: "description",
      notes: "notes"
    },
    {
      project_id: "2",
      description: "description",
      notes: "notes"
    },
    {
      project_id: "3",
      description: "description",
      notes: "notes"
    },
  ]);
};

