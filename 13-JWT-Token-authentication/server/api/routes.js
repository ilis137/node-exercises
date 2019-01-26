const router = require("express").Router()
const data = require("../db/db.json")
const { check, validationResult } = require('express-validator/check');
const jwt = require("jsonwebtoken")

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

router.get('/tasks', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.status(200).json({ data: data.tasks, authData });
        }
    })
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

router.post("/login", (req, res) => {
    const user = {
        id: 1,
        username: "Alice",
        email: "alice@gmail.com"
    }
    jwt.sign({ user }, "secretkey", (err, token) => {
        res.json({ token: token })
    })
})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']

    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1];
        req.token = bearerToken;

        next()
    } else {
        res.sendStatus(403)
    }
}

module.exports = router;