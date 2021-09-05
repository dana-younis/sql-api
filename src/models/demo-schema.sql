DROP TABLE IF EXISTS Products;
CREATE TABLE Products(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  price INTEGER,
  catugary varchar(255)),
 image varchar(2000)),
  description varchar(1000));

DROP TABLE IF EXISTS clothes;
CREATE TABLE clothes(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  price INTEGER,
  catugary varchar(255));
  
