let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        // console.log(req.query)
        let sql = `SELECT * FROM user WHERE username="${req.query.username}"`;
        db.query(sql, (err, data) => {
            if (!err) {
                if (data.length > 0) {
                    if (data[0].password == req.query.password) {
                        // console.log(data[0].id)
                        req.session.id = data[0].id
                        res.send({ "err": 0, "msg": "登陆成功" });
                    } else {
                        res.send({ "err": 1, "msg": "密码有误" });
                    }
                } else {
                    res.send({ "err": 1, "msg": "用户名不存在" });
                }
            }
        })
    })
    return router;
}