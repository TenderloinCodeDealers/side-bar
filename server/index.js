const express = require('express');
const app = express();
const controller = require('../database/index.js');

app.get('/:id/api/products', (req, res) => {
  var productId = req.params.id;
  console.log('productID: ' + productId);

  controller.getProduct(productId, (err, data) => {
    if(err) {
      res.status(503).send(err);
      console.log('Error, in getting data from DB')
    } else {
      res.send(data);
      // res.send(req.params);
    }
  })
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}.`)});

