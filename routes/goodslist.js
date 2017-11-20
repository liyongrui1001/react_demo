let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res,next) => {
        let sql=`SELECT * FROM goodslist`;
        db.query(sql,(err,data)=>{
          if(!err){
            
            res.send(data);
          }
        })
    });
    
    return router;
}