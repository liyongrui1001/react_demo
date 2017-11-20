let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        // console.log(req.session.id)
        if (!req.session.id) {
            // console.log("cuowu1");
            res.send({ "err": 1, "msg": "未登陆" });
        } else {
            let sql = `SELECT * FROM user WHERE id="${req.session.id}"`;
            db.query(sql, (err, data) => {
                // console.log(data[0]);
                if (data.length > 0) {
                    data[0].err=0;
                    res.send(data[0]);
                }
            })
        }


    });
    return router;
}