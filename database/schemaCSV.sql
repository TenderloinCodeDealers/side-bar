-- Ref for issue with --secure-file-priv
-- https://stackoverflow.com/questions/32737478/how-should-i-tackle-secure-file-priv-in-mysql

CREATE DATABASE IF NOT EXISTS vourcher;
USE vourcher;

CREATE TABLE IF NOT EXISTS products (
  product_id INT NOT NULL,
  category VARCHAR(10),
  product_name VARCHAR(50),
  -- expiration_time DATETIME,
  expiration_time VARCHAR(50),  -- [Todo] Fix data type back to DATETIME, later
  product_option VARCHAR(50),
  product_price INT,
  warranty_cost VARCHAR(10)  -- [Todo] Fix data type back to INT, later
);

LOAD DATA INFILE '/Users/huanl/Desktop/side-bar/database/products.csv' INTO TABLE products
FIELDS TERMINATED BY ','
-- ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;
