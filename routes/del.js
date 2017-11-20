let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res) => {
      // console.log(req.query)
      let sql = `DELETE FROM shopcar WHERE id="${req.query.id}"`;

      db.query(sql, (err, data) => {
          if (!err) {
              res.send({ "err": 0, "msg": "删除成功" });
          }
      })
    })
    return router;
}