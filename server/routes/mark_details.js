const router = require("express").Router();
//const bcrypt = require("bcrypt");
const Mark = require("../models/MarkDetails");

//get user

router.get("/:id", async (req, res) => {
    try {
      //console.log(req.params.id)
      const mark = await Mark.findById(req.params.id);
      res.status(200).json(mark);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//post

router.post("/add", async (req, res) => {
  const newmark = new Mark(req.body);
  try {
    const savedMark = await newmark.save();
    res.status(200).json(savedMark);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/:id", async (req, res) => {
  try {
    const mark = await Mark.findById(req.params.id);
    if (mark._id.toString() === req.body._id) {
      await mark.updateOne({ $set: req.body });
      res.status(200).json("Post updated Successfully");
    } else {
      res.status(403).json("You cannot update");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete

router.delete("/:id", async (req, res) => {
  try {
    const mark = await Mark.findById(req.params.id);
    if (mark._id.toString() === req.body._id) {
      await mark.deleteOne();
      res.status(200).json("Post deleted Successfully");
    } else {
      res.status(403).json("You can delete only your account");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;