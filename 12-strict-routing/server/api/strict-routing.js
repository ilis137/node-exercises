const router = require("express").Router({ strict: true })

router.get("/route1", (req, res) => {
    res.send("/route1 is different from /route1/")
})
router.get("/route1/", (req, res) => {
    res.send(" /route1/")
})
module.exports = router