DROP TABLE IF EXISTS Products;
CREATE TABLE Products(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  price INTEGER,
  image varchar(255),
  description varchar(255),
  catugary varchar(255));


DROP TABLE IF EXISTS clothes;
CREATE TABLE clothes(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  price INTEGER,
  catugary varchar(255));
