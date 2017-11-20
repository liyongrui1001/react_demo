let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
        req.session.id="";
        res.send({ "err": 0, "msg": "已退出" });
    });
    return router;
}