// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);
const express = require('express');
const app = express();
const body_parser = require('body-parser');
const body = body_parser();

app.post('/data', function (req, res) {
  let results = {
    status: req.body.is_success,
    user_id: req.body.user_id,
    email: req.body.email,
    roll_number: req.body.roll_number,
    odd_numbers: req.bodyodd_numbers,
    even_numbers: req.body.even_numbers,
    alphabets: req.body.alphabets,
  };
  var sqlQuery = 'INSERT INTO data SET ?';
  conn.sqlQuery((err, results) => {
    if (err) throw err;
    else res.send({ results });
  });
});
app.listen(3000, function (req, res) {
  console.log('app started on port 3000');
});
