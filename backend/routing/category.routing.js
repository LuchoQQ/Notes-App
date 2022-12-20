const express = require("express");
const router = express.Router();
const db = require("../models");
const Note = db.note;
const Category = db.category;

router.get("/", async (req, res) => {
    const categories = await Category.findAll({
        /* include: [
            {
                model: Note,
                as: "notes",
                attributes: ["id", "title", "content", "archived"],
                through: {
                    attributes: [],
                },
            },
        ],
         */
    });
    return res.json(categories);
});

router.post("/", async (req, res) => {
    const category = await Category.create(req.body);
    return res.json(category);
});

/* 
router.get("/:id", async (req, res) => {
    const note = await Note.findByPk(req.params.id);
    res.json(note);
});

router.put("/:id", async (req, res) => {
    const note = await Note.update(req.body, {
        where: { id: req.params.id },
    });
    res.json(note);
});

router.delete("/:id", async (req, res) => {
    const note = await Note.destroy({
        where: { id: req.params.id },
    });
    res.json(note);
});

router.post("/add-category", async (req, res) => {
    const note = await Note.findByPk(req.body.noteId);
    const category = await Category.findByPk(req.body.categoryId);

    

    res.json(note);
});
 */
module.exports = router;
