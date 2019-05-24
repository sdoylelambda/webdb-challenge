
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: "test projects",
      description: " test projects"
    },
    { 
      name: "test projects", 
      description: "test projects" 
    },
    { 
      name: "test projects", 
    description: "test projects" 
  }
  ]);
};

