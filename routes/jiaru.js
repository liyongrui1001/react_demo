let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
      // console.log(req.query)
     
      let sql = `SELECT * FROM shopcar WHERE gid="${req.query.gid}"`;
      db.query(sql, (err, data) => {
        if (!err) {
            if(data.length>0){
                 var newCount=Number(data[0].count)+1;
                let sql=`UPDATE shopcar SET count="${Number(data[0].count)+1}" WHERE id="${data[0].id}"`;
                db.query(sql,(err,data)=>{
                    if(!err){
                        let sql=`SELECT * FROM shopcar`;
                        db.query(sql,(err,data)=>{
                            if(!err){
                                res.send(data);
                            }
                        })
                    }
                })
            }else{
                let sql = `INSERT INTO shopcar (id,uid,gid,title,src,count,price,oprice) VALUES (0,"${req.query.uid}","${req.query.gid}","${req.query.title}","${req.query.src}",1,"${req.query.price}","${req.query.oprice}")`;
                db.query(sql,(err,data)=>{
                    if(!err){
                        let sql=`SELECT * FROM shopcar`;
                        db.query(sql,(err,data)=>{
                            if(!err){
                                res.send(data);
                            }
                        })
                    }
                })
            }
        }
    })


    });
    return router;
}