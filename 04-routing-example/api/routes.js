const router = require('express').Router();
const data = require('../db/db.json');


router.get("/projects", (req, res) => {
    res.status(200).json(data.projects)
})

router.get("/tasks", (req, res) => {
    res.status(200).json(data.tasks)
})

module.exports = router