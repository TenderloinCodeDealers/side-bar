const express = require('express');
const app = express();
const controller = require('../database/index.js');

app.get('/:id/api/products', (req, res) => {
  let productId = req.params.id;  //var productId = req.params.id;
  console.log('productID: ' + productId);

  controller.getProduct(productId, (err, data) => {
    if(err) {
      // res.status(503).send(err);
      // console.log('Error, in getting data from DB')
      res.status(500).send('Error, in getting data from DB');
    } else {
      res.status(200).send('Success, in getting data from DB');
      res.send(data);
    }
  })
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}.`)});

