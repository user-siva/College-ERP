const router = require("express").Router();
//const bcrypt = require("bcrypt");
const StudentAttendance = require("../models/StudentAttendance");


//filter

router.get("/filter_students/", async (req, res) => {
  try {
    const student_attendance = await StudentAttendance.find({ department:req.body.department,year:req.body.year });
    res.status(200).json(student_attendance);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user

router.get("/:id", async (req, res) => {
    try {
      //console.log(req.params.id)
      const studentAttendance = await StudentAttendance.findById(req.params.id);
      res.status(200).json(studentAttendance);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//post

router.post("/", async (req, res) => {
  const newstudentAttendance = new StudentAttendance(req.body);
  try {
    await newstudentAttendance.save();
    res.status(200).json("Post saved successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/:id", async (req, res) => {
  try {
    const studentAttendance = await StudentAttendance.findById(req.params.id);
    if (studentAttendance._id.toString() === req.body._id) {
      await studentAttendance.updateOne({ $set: req.body });
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
    const studentAttendance = await StudentAttendance.findById(req.params.id);
    if (studentAttendance._id.toString() === req.body._id) {
      await studentAttendance.deleteOne();
      res.status(200).json("Post deleted Successfully");
    } else {
      res.status(403).json("You can delete only your account");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;