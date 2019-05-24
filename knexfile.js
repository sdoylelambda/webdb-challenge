module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      // check db name  !!!!!!
      filename: './data/lambda.db3', // the folder will be created when we run the migrations
    },
    // STEP 1
    migrations: {
      directory: './data/migrations'
    },
    // STEP 2
    seeds: {
      directory: './data/seeds'
    },
    // STEP 3 
    // in terminal run npx knex migrate:make bootstrap
    // it should auto put in data folder, if not move if there when done
    
    // STEP 8



    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done)
    //   }
    // }
  },
};
