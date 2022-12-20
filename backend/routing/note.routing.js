const express = require("express");
const router = express.Router();
const db = require("../models");
const Note = db.note;
const Category = db.category;

router.get("/", async (req, res) => {
    const notes = await Note.findAll({
        include: [
            {
                model: Category,
                as: "categories",
                attributes: ["id", "name"],
                through: {
                    attributes: [],
                },
            },
        ],
    });
    res.json(notes);
});

router.post("/", async (req, res) => {
    const note = await Note.create(req.body);
    res.json(note);
});

// add category to note
router.post("/add-category", async (req, res) => {
    const note = await Note.findByPk(req.body.noteId);
    const category = await Category.findByPk(req.body.categoryId);
    if (!note || !category) {
        return res.status(404).json({ message: "Note or category not found" });
    }
    await note.addCategory(category);

    return res.status(200).json({ message: "Category added to note" });
});

// remove category from note

router.post("/remove-category", async (req, res) => {
    const note = await Note.findByPk(req.body.noteId);
    const category = await Category.findByPk(req.body.categoryId);

    if (!note || !category) {
        return res.status(404).json({ message: "Note or category not found" });
    }
    const result = await note.removeCategory(category);

    if (!result) return res.status(200).json({ message: "Category not exist" });
    return res.status(200).json({ message: "Category removed from note" });
});

module.exports = router;
