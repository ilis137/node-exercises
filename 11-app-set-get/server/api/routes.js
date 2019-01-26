const router = require("express").Router()
const data = require("../db/db.json")
const { check, validationResult } = require('express-validator/check');


const findByProjectId = (id, cb) => {
    if (!data.projects[id]) {
        return cb(new Error('No Matching id ' + id))
    }
    return cb(null, data.projects[id])
}
router.get("/projects", (req, res) => {
    res.status(200).json(data.projects)
})

router.get('/projects/:id', (req, res, next) => {
    const id = req.params.id;

    findByProjectId(id, (error, project) => {
        if (error) {
            return next(error);
        }
        return res.status(200).json(project);
    });
});

router.get('/tasks', (req, res) => {
    res.status(200).json(data.tasks);
});
router.post('/projects/add/project', [
    check('id')
    .trim()
    .matches(/\d/)
], (req, res) => {
    let id = req.body.id
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ error: errors.mapped() });
    } else {
        return res.json(req.body);
    }
});

module.exports = router;