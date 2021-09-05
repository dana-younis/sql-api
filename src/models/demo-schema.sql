DROP TABLE IF EXISTS products;
CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  price INTEGER,
  catugary varchar(255));
 image varchar(255));
  description varchar(255));

DROP TABLE IF EXISTS clothes;
CREATE TABLE clothes(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  price INTEGER,
  catugary varchar(255));
