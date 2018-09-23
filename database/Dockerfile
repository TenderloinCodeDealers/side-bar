# For MySql DB
# FROM mysql:latest
FROM mysql:5.7

# Add a database
ENV MYSQL_DATABASE vourcher

# Add the content of the sql-scripts/ directory to your image
# COPY schemaCSV.sql /var/lib/mysql-files
# COPY products.csv /var/lib/mysql-files

COPY products_dump.sql /products_dump.sql

# RUN /schemaCSV.sql