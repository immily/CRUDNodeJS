var db = require('../../config/db.js');


var Supplier = {

    getAllSuppliers: function(callback){
        var sqlGetAll = `SELECT sp.supplier_id, sp.name AS 'supplier_name' FROM supplier sp ORDER BY sp.name ASC`;
        return db.query(sqlGetAll, callback);
    },
    getSuppliersById: function(id, callback){
        var sqlGetSupplierById = `SELECT sp.supplier_id, sp.name AS 'supplier_name' FROM supplier sp 
        WHERE sp.supplier_id = ?`;
        return db.query(sqlGetSupplierById, [id], callback);
    },
    getAllSuppliersByUserId: function(id, callback){
        var sqlGetAllById = `SELECT sp.supplier_id, sp.name AS 'supplier_name' FROM supplier sp 
        WHERE sp.user_id = ?`;
        return db.query(sqlGetAllById, [id], callback);
    },

    addSupplier: function(Supplier, callback){
        return db.query("INSERT INTO supplier(name) VALUES(?)",[Supplier.name],callback);
    },
    deleteSupplier:function(id,callback){
        return db.query("DELETE FROM supplier WHERE supplier_id=?",[id],callback);
    },
    updateSupplier: function(id, Supplier, callback){
        return db.query("UPDATE supplier SET name = ? WHERE supplier_id=?", [Supplier.name,id],callback);
    }

};

module.exports=Supplier;