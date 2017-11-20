let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        // console.log(req.session.id)
        if (!req.session.id) {
            res.send({ "err": 1, "msg": "未登陆" });
        } else {
            let sql = `SELECT * FROM shopcar`;
            db.query(sql, (err, data) => {
                if(!err){
                  res.send({ "err": 0, "data": data })
                }
            })
        }


    });
    return router;
}