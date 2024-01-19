const router = require("express").Router();
//const bcrypt = require("bcrypt");
const Student = require("../models/Student");


//get student

router.get("/:id", async (req, res) => {
    try {
      //console.log(req.params.id)
      const student = await Student.findById(req.params.id);
      res.status(200).json(student);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//post

router.post("/", async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json("Post saved successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student._id.toString() === req.body._id) {
      await student.updateOne({ $set: req.body });
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
    const student = await Student.findById(req.params.id);
    console.log("_id:",student._id.toString())
    console.log("req",req.body._id)
    if (student._id.toString() === req.body._id) {
      await student.deleteOne();
      res.status(200).json("Post deleted Successfully");
    } else {
      res.status(403).json("You can delete only your account");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;