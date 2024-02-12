const express = requre("express")
const cors = require("cors")
const morgan = require("morgan")
const low - require("lowdb")

const idLength = 8;

router.get("/", (req, res) => {
    const person = req.app.db.get("person")

    res.send(books)
})

router.get("/:id", (req, res) => {
    const book = req.app.db.get("person").find({ id: req.params.id}).value()

    res.send(person)
})

router.post("/", (req, res) => {
    try{
        const person = {
            id: nanoid(idLength),
            ...req.body
        }

        req.app.db.get("person").push(person).write()
    }   catch (error) {
        return res.status(500).send(error)
    }
})

router.put("/:id", (req, res) => {
    try{
        req.ap.db.get("person").find({ id: req.params.id }).assign(req.body).write()

        res.send(req.app.db.get("person").find({id:req.params.id}))
    } catch(error){
        return res.status(500).send(error)
    }
})

router.delete("/:id", (req, res) => {
    req.app.db.get("person").remove({ id: req.params.id}).write();

    res.sendStatus(200);
});

module.exports = router;
