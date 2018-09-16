const express = require('express');
const app = express();
const controller = require('../database/index.js');

// Note: added '/:id', so that urls (e.g. http://localhost:3004/55/) work
app.use('/:id', express.static(__dirname + '/../client/dist'));
// app.use(express.static(__dirname + '/../client/dist'));

app.get('/:id/api/products', (req, res) => {
  let productId = req.params.id; //var productId = req.params.id;
  console.log('productID: ' + productId);

  controller.getProduct(productId, (err, data) => {
    if (err) {
      res.status(500).send('Error, in getting data from DB');
    } else {
      res.send(data);
      // Note: the latter does not work, because res cannot be sent twice
      res.status(200); //res.status(200).send('Success, in getting data from DB');
    }
  });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
