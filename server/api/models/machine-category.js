var db = require('../../config/db.js');


var MachineCategory = {

    getAllMachineCategories: function(callback){
        var sqlGetAll = `SELECT mc.machcate_id, sp.supplier_id AS 'supplier_id', sp.name AS 'supplier_name', mc.name,\
         mc.user_id, mc.photo FROM machinecategory mc, supplier sp WHERE mc.supplier_id = sp.supplier_id`;
        return db.query(sqlGetAll, callback);
    },
    getMachineCategoryById: function(id, callback){
        var sqlGetById = `SELECT mc.machcate_id, sp.supplier_id AS 'supplier_id', sp.name AS 'supplier_name', mc.name,\
        mc.user_id, mc.photo FROM machinecategory mc, supplier sp WHERE mc.supplier_id = sp.supplier_id \
        AND mc.machcate_id = ?`;
        return db.query(sqlGetById, [id], callback);
    },
    addMachineCategory: function(MachineCategory, callback){
        return db.query("INSERT INTO machinecategory(name, supplier_id, photo) VALUES(?,?,?)",[MachineCategory.name,MachineCategory.supplier_id, MachineCategory.photo],callback);
    },
    deleteMachineCategory:function(id,callback){
        return db.query("DELETE FROM machinecategory WHERE machcate_id=?",[id],callback);
    },
    updateMachineCategory: function(id, MachineCategory, callback){
        return db.query("UPDATE machinecategory SET name = ?, photo = ?, supplier_id = ? WHERE machcate_id = ?", [MachineCategory.name,MachineCategory.photo,MachineCategory.supplier_id, MachineCategory.machcate_id],callback);
    }

};

module.exports=MachineCategory;