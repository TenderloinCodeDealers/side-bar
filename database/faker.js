// Note testing faker.js through console.log

// Faker is a npm module; https://www.npmjs.com/package/faker
var faker = require('faker');

// For step 2's exporting to CSV file
var csvWriter = require('csv-write-stream');
var fs = require('fs');

/*
  Generate data for table 1, product table
*/

// Step 1: generate n rows of product data; use helper functions
// Step 2: after generating data, export somewhere; then load to MySQL (relational)

// Step 1

// Generate 100 products (each with 2 options, so 200 rows)
var products = generateProductData(100);
// console.log(products);


function generateProductData(n) {
  var outputProducts = [];  // An array of objects
  for (var i = 1; i <= n; i++) {
    var product_id = i;
    var category = getCategory(i);
    var product_name = getProductName(category);
    var expiration_time= faker.date.between('2018-09-10', '2018-09-21');  // Between 2 future dates

    for (var j = 1; j <= 2; j++) {  // 2 options per product
      var newObj = {};

      newObj.product_id = product_id;
      newObj.category = category;
      newObj.product_name = product_name;
      newObj.expiration_time = expiration_time;  // Between 2 future dates

      newObj.product_option = getProductOption(j);
      newObj.product_price = getProductPrice(newObj.product_option);
      newObj.warranty_cost = getWarrantyCost(newObj.category, newObj.product_option);

      outputProducts.push(newObj);
    }
  }
  return outputProducts;
};

// Helper functions
// var getCategory = function(int) {
function getCategory(int) {
  if (int <= 50) {
    return 'Local';
  } else {
    return 'Goods';
  }
};
function getProductName(category) {
  if (category === 'Local') {
    return faker.fake("{{lorem.words}}");
  } else if (category === 'Goods') {
    return faker.fake("{{commerce.productName}}");
  }
};
function getProductOption(int) {
  if (int === 1) {
    return 'Option 1';
  } else {
    return 'Option 2';
  }
};
// Use JS's Math method, for product_price and warranty cost
// Not using faker.js: var product_price = faker.fake("{{commerce.price}}");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
function getProductPrice(option) {
  if (option === 'Option 1') {
    return getRandomInt(20, 50);
  } else {
    return getRandomInt(55, 100);
  }
};
function getWarrantyCost(category, option) {
  if (category === 'Local') {
    return null;
  } else if (category === 'Goods' && option === 'Option 1') {
    return getRandomInt(5, 9);
  } else if (category === 'Goods' && option === 'Option 2') {
    return getRandomInt(10, 15);
  }
};


// Step 2 (for scability): export to CSV file (or JSON file)
// var writer = csvWriter({headers: ['product_id', 'category', 'product_name', 'expiration_time', 'product_option', 'product_price', 'warranty_cost']});
writer = csvWriter();
writer.pipe(fs.createWriteStream('products.csv'));
for (var i = 0; i < products.length; i++) {
  writer.write(products[i]);
}
// writer.write(products[0]);
writer.end();

// module.exports.products = products;


/*
  Generate data for table 2, view table
*/

// Follow the same steps, as for table 1
// [Todo] Do this over the weekend


