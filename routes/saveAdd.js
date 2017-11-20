let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        // console.log(req.query)
        let sql = `UPDATE user SET name="${req.query.name}",phone="${req.query.phone}",diqu="${req.query.diqu}",addr="${req.query.addr}"  WHERE id="${req.query.id}"`;
        // let sql = `SELECT * FROM user WHERE id="${req.query.id}"`;
        db.query(sql, (err, data) => {
            if (!err) {
              console.log(data)
              let sql = `SELECT * FROM user WHERE id="${req.query.id}"`;
                db.query(sql,(err,data)=>{
                  if(!err){
                    res.send({"err":0,"data":data[0]})
                  }else{
                    res.send({"err":1,"msg":"请求数据库数据错误"})
                  }
                })
            }else(
              res.send({"err":1,"msg":"修改地址出错"})
            )
        })
    })
    return router;
}