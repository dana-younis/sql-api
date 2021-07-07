'use strict';
const pool = require('./pool');
class InterfaceFood {
  read(id) {
    if (id) {
      return pool.query('SELECT * FROM food WHERE id=$1;', [id]);
    }
    return pool.query('SELECT * FROM food;');
  }

  create(obj) {
    const sql = 'INSERT INTO food (name,price,catugary) VALUES ($1,$2,$3) RETURNING *;';
    const safeValues = [obj.name, obj.price,obj.catugary];
    return pool.query(sql, safeValues);
  }

  update(id, obj) {
    const sql = 'UPDATE food SET name=$1,price=$2,catugary=$3 WHERE id=$4 RETURNING *;';
    const safeValues = [obj.name, obj.price,obj.catugary,id];
    return pool.query(sql, safeValues);
  }

  delete(id) {
    return pool.query('DELETE FROM food WHERE id=$1 RETURNING *;', [id]);
  }
}
module.exports = InterfaceFood;
