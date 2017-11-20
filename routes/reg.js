let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        // console.log(req.query.username)
        let sql = `SELECT * FROM user WHERE username="${req.query.username}"`;
        db.query(sql, (err, data) => {
            if (!err) {
                if (data.length > 0) {
                    res.send({ "err": 1, "msg": "用户名已存在" });
                } else {
                    let sql = `INSERT INTO user (id,username,password,mark) VALUES (0,"${req.query.username}","${req.query.password}",0)`;
                    db.query(sql, (err, data) => {
                        if (!err) {
                            res.send({ "err": 0, "msg": "注册成功" });

                        }
                    })

                }
            }
        })
    })
    return router;
}