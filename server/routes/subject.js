const router = require("express").Router();
//const bcrypt = require("bcrypt");
const Subject = require("../models/Subject");


//filter

router.get("/filter_subjects/", async (req, res) => {
  try {
    const subjects = await Subject.find({ department:req.body.department,year:req.body.year });
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all

router.get("/all", async (req, res) => {
  try {
    const subject = await Subject.find(req.body);
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user

router.get("/:id", async (req, res) => {
    try {
      //console.log(req.params.id)
      const subject = await Subject.findById(req.params.id);
      res.status(200).json(subject);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//post

router.post("/add", async (req, res) => {
  const newsubject = new Subject(req.body);
  try {
    await newsubject.save();
    res.status(200).json("Post saved successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/:id", async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (subject._id.toString() === req.body._id) {
      await subject.updateOne({ $set: req.body });
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
    const subject = await Subject.findById(req.params.id);
    if (subject._id.toString() === req.body._id) {
      await subject.deleteOne();
      res.status(200).json("Post deleted Successfully");
    } else {
      res.status(403).json("You can delete only your account");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;