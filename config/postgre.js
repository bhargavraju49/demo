const { Client } = require("pg");
// const client = new Client();

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "factuser",
  database: "postgres",
});

module.exports = client;
