var router = require('express').Router();
var Machinecategory = require('../models/machine-category');


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

router.get('/machinecategory/:id?', (req, res) => {
    if(req.params.id){
        Machinecategory.getMachineCategoryById(req.params.id, function(err, rows){
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
        Machinecategory.getAllMachineCategories(function(err, rows){
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
router.post('/machinecategory', (req, res)=>{

    Machinecategory.addMachineCategory(req.body, function(err, count){
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
router.put('/machinecategory/:id?', (req, res)=>{
    Machinecategory.updateMachineCategory(req.params.id, req.body, function(err, rows){
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
router.delete('/machinecategory/:id?', (req, res)=>{
    Machinecategory.deleteMachineCategory(req.params.id, function(err, count){
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