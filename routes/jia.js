let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        let sql = `SELECT * FROM shopcar WHERE id="${req.query.id}"`;

        db.query(sql, (err, data) => {
            if (!err) {
                if(data.length>0){
                     var newCount=Number(data[0].count)+1;
                    let sql=`UPDATE shopcar SET count="${Number(data[0].count)+1}" WHERE id="${data[0].id}"`;
                    db.query(sql,(err,data)=>{
                        if(!err){
                            res.send({ "err": 0, "msg": "增加一件商品","count":newCount });
                        }
                    })
                }
            }
        })
    })
    return router;
}