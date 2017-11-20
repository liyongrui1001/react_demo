let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        // console.log(req.query)
        let sql = `INSERT INTO shequ (id,name,content,time,src) VALUES (0,"${req.query.name}","${req.query.content}","${req.query.time}","${req.query.src}")`;
        db.query(sql,(err,data)=>{
          if(!err){
            let sql = `SELECT * FROM shequ`;
            db.query(sql,(err,data)=>{
              if(!err){
                res.send(data)
              }
            })
          }
        })
        
    })
    return router;
}