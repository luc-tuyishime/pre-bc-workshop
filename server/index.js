const express = require('express');
const app = express();
const PORT = 3000;
const bodyparser = require('body-parser');
const Phone = require('../src/phone')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extend: false
}));

app.get('/item', (req , res) => {
 const phone = new Phone('blue', 300, 2500, "micro")
phone.setPrice(2500);
 console.log("##price", phone.getFinalPrice());

  res.status(200).send({
    msg: "successful",
    status: 200
  });
});

app.post('/user', (req, res) => {
  const { id, username, email ,password } = req.body
  res.status(201).send({
    id,
    username,
    email,
    password
  })
})

app.listen(PORT, () => {
  console.log(`the port is listening on port ${PORT}`);
})

module.exports = app
