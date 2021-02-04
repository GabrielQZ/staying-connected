require('dotenv').config()

const 
  express = require('express'),
  app = express(),
  PORT = process.env.PORT,
  DB_URI = process.env.DB_URI;

app.listen(PORT, () => {
  console.log(`Sever listening on port: ${PORT}`);
})
