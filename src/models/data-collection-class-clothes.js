'use strict';
const pool = require('./pool');

class InterfaceClothes {
read(id) {
    if (id) {
      return pool.query('SELECT * FROM clothes WHERE id=$1;', [id]);
    }
    return pool.query('SELECT * FROM clothes;');
  }

create(obj) {
    const sql = 'INSERT INTO clothes (name,price,catugary,image,description) VALUES ($1,$2,$3,$4,$5) RETURNING *;';
    const safeValues = [obj.name, obj.price,obj.catugary,obj.image,obj.description];
    return pool.query(sql, safeValues);
  }

  update(id, obj) {
    const sql = 'UPDATE clothes SET name=$1,price=$2,catugary=$3 WHERE id=$4 RETURNING *;';
    const safeValues = [obj.name, obj.price,obj.catugary,id];
    return pool.query(sql, safeValues);
  }

  delete(id) {
    return pool.query('DELETE FROM clothes WHERE id=$1 RETURNING *;', [id]);
  }
}
module.exports = InterfaceClothes;