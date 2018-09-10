const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  //'me',
  // password: 'secret',
  database: 'vourcher'
});


// Note: get product data, for a queried product_id (specified by server's method)
const getProduct = function(productID, callback) {
  connection.query(`SELECT * FROM products WHERE product_id = ?;`, [productID], function(error, results, fields){
    if(error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  })
};

module.exports.getProduct = getProduct;
