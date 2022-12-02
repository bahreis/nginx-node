const express = require('express')
const app = express()
const port = 3000

const { Client } = require('pg')
const client = new Client({
  host: 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'pgsql',
  // port: 5432,
})


client.connect(function (err, client) {
  if (err) {
    return console.error('connexion error', err);
  }
  client.query(`CREATE TABLE IF NOT EXISTS "users" ("id" SERIAL,
 	    name VARCHAR(100) NOT NULL,
 	    PRIMARY KEY ("id")
     );`)

  client.query(`INSERT INTO users(name) VALUES ('Teste')`);

  client.query("select * from users", function (err, result) {

    if (err) {
      return console.error('error running query', err);
    }
    
    // console.log(result.rows[0]['name'])


    app.get('/', (req, res) => {
      res.send(`<h1>Full Cycle Rocks!</h1>
      <h2> Bem vindo: </h2>` + result.rows[0]['name'])
    })

  });
});

// app.get('/', (req, res) => {
//   res.send("<h1>Full Cycle Rocks!</h1>")
// })

app.listen(port, () => {
  console.log('escutando na porta: ' + port)
})