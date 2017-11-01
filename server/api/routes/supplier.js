var router = require('express').Router();
var Supplier = require('../models/supplier');


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/supplier/:id?', (req, res) => {
    console.log('enter here supplier');
    if(req.params.id){
        Supplier.getSuppliersById(req.params.id, function(err, rows){
            if(err){
              sendError(err, res);
            }
            else{
              response.data = rows;
              res.json(response);
            }
        });
    }
    else{
        Supplier.getAllSuppliers(function(err, rows){
            if(err){
                sendError(err, res);
            }
            else{
                response.data = rows;
                res.json(response);
            }
        });
    }
  });
router.post('/supplier', (req, res)=>{
    Supplier.addSupplier(req.body, function(err, count){
        if(err){
            sendError(err, res);
          }
          else{
            response.data = count;
            response.message = "insert data successfully";
            res.json(response);
          }
    })
});
router.put('/supplier/:id?', (req, res)=>{
    Supplier.updateSupplier(req.params.id, req.body, function(err, rows){
        if(err){
            sendError(err, res);
          }
          else{
            response.data = rows;
            response.message = "updated data successfully";
            res.json(response);
          }
    })
});
router.delete('/supplier/:id?', (req, res)=>{
    Supplier.deleteSupplier(req.params.id, function(err, count){
        if(err){
            sendError(err, res);
          }
          else{
            response.data = count;
            response.message = "deleted data successfully";
            res.json(response);
          }
    })
});
module.exports=router;