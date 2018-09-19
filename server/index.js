const express = require('express');
const app = express();
const controller = require('../database/index.js');
const path = require('path');

// Note: added '/:id', so that urls (e.g. http://localhost:3004/55/) work
// app.use(express.static(__dirname, '../client/dist'));
app.use('/:id', express.static(path.join(__dirname + '/../client/dist')));
// app.use(express.static(path.join(__dirname + '/../client/dist')));
// console.log('__dirname is: ' + __dirname);
// console.log('Joined path: ' + path.join(__dirname, '../client/dist'));

// Allow CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
