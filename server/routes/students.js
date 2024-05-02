const router = require("express").Router();
//const bcrypt = require("bcrypt");
const Student = require("../models/Student");


//filter

router.post("/filter_students", async (req, res) => {
  try {
    const filter = {
      department: req.body.department,
    };

    if (req.body.year) {
      filter.year = req.body.year;
    }

    if (req.body.semester) {
      filter.semester = req.body.semester;
    }

    const students = await Student.find(filter);
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all

router.get("/all", async (req, res) => {
  try {
    const student = await Student.find(req.body);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

router.post("/add", async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/update/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student._id.toString() === req.params.id) {
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

router.delete("/delete/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student._id.toString() === req.params.id) {
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