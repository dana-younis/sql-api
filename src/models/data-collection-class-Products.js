'use strict';
const pool = require('./pool');
class InterfaceProducts {
  read(id) {
    if (id) {
      return pool.query('SELECT * FROM Products WHERE id=$1;', [id]);
    }
    return pool.query('SELECT * FROM Products;');
  }

  create(obj) {
    const sql = 'INSERT INTO Products (name,price,catugary,image,description) VALUES ($1,$2,$3,$4,$5) RETURNING *;';
   
      const safeValues = [obj.name, obj.price,obj.catugary,obj.image,obj.description];
    return pool.query(sql, safeValues);
  }

  update(id, obj) {
    const sql = 'UPDATE Products SET name=$1,price=$2,catugary=$3 ,image =$4, description=$5 WHERE id=$6 RETURNING *;';
    const safeValues =[obj.name, obj.price,obj.catugary,obj.image,obj.description];
    return pool.query(sql, safeValues);
  }

  delete(id) {
    return pool.query('DELETE FROM Products WHERE id=$1 RETURNING *;', [id]);
  }
}
module.exports = InterfaceProducts;
