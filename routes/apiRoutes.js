const express = require("express");
const router = express.Router();
const db = require("../models");

//get all todo
router.get("/all", (req, res) => {
    db.Todo.findAll().then(todos =>
        res.send(todos))
});


// get single todo by id
router.get("/findho/:id", (req, res) => {
    db.Todo.findAll({
        where: {
            id: req.params.id
        }
    }).then(todo => res.send(todo));
});

//delete to
router.delete("/delete/:username", (req, res) => {
        db.Todo.destroy({
            where: {
                username: req.params.username
            }
        }).then(() => res.send("delete success"));
    })
    //edit
router.put("/edit02", (req, res) => {
    db.Todo.update({
        text: req.body.text
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("success"));
});
//post new todo 
router.post('/new1', (req, res) => {
    db.Todo.create({
        text: req.body.text,
        fullname: req.body.fullname,
        password: req.body.password,
        username: req.body.username,
        last_login: req.body.last_login
    }).then(submitedTodo => res.send(submitedTodo));
});
module.exports = router;