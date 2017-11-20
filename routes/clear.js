let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        let sql = `TRUNCATE TABLE shopcar`;

        db.query(sql, (err, data) => {
            if (!err) {
                res.send({ "err": 0, "msg": "删除成功" });
            }
        })
    })
    return router;
}