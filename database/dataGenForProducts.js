/*
  About: generate data for table 1, products
  The steps:
  Step 1: generate n rows of product data; use helper functions
  Step 2: after generating data, export to CSV file
*/

// Step 1: generate data

// Note testing faker.js through console.log
// Faker is a npm module; https://www.npmjs.com/package/faker
const faker = require('faker');

// Generate 100 products (each with 2 options, so 200 rows)
const products = generateProductData(100);
// console.log(products);


function generateProductData(n) {
  const outputProducts = [];  // An array of objects
  for (let i = 1; i <= n; i++) {
    let product_id = i;
    let category = getCategory(i);
    let product_name = getProductName(category);
    let expiration_time= faker.date.between('2018-09-10', '2018-09-21');  // Between 2 future dates

    for (let j = 1; j <= 2; j++) {  // 2 options per product
      let newObj = {};

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
// Not using faker.js: product_price = faker.fake("{{commerce.price}}");
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


// Step 2: export to CSV file (for scability), instead of JSON file
const csvWriter = require('csv-write-stream');
const fs = require('fs');

writer = csvWriter();
writer.pipe(fs.createWriteStream('products.csv'));
for (let i = 0; i < products.length; i++) {
  writer.write(products[i]);
}
writer.end();

// module.exports.products = products;



