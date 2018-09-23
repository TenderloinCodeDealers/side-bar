const mysql = require('mysql');

// Note: use local connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   // password: 'secret',
//   database: 'vourcher'
// });

// Note: use remote connection with EC2
const connection = mysql.createConnection({
  host: '18.191.153.175',
  port: '3306',
  user: 'lancy',
  password: 'password',
  database: 'vourcher'
});

// Note: get product data, for a queried product_id (specified by server's method)
const getProduct = function(productID, callback) {
  connection.query(`SELECT * FROM products WHERE product_id = ?;`, [productID], function(
    error,
    results,
    fields
  ) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getProduct = getProduct;
~