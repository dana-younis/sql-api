class Interface {
    constructor(table) {
        this.table = table;
    }
    create(obj) {
        const sql = `INSERT INTO ${this.table} (name,price) VALUES ($1,$2) RETURNING *;`;
        const safeValues = [obj.name, obj.price];
        return pool.query(sql, safeValues);
    }

    read(id) {
        if (id) {
            return pool.query(`SELECT * FROM ${this.table} WHERE id=$1;`, [id]);
        }
        return pool.query(`SELECT * FROM ${this.table};`);
    }
    update(id, obj) {
        const sql = `UPDATE ${this.table} SET name=$1,price=$2 WHERE id=$3 RETURNING *;`;
        const safeValues = [obj.name, obj.price, id];
        return pool.query(sql, safeValues);
    }
    delete(id) {
        return pool.query(`DELETE FROM ${this.table} WHERE id=$1 RETURNING *;`, [id]);
    }
}

module.exports = Interface;