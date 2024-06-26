const router = require("express").Router();
//const bcrypt = require("bcrypt");
const TimeTable = require("../models/TimeTable");


//filter

router.post("/filter_timetable/", async (req, res) => {
  try {
    console.log(req.body);

    const filter = {
      department: req.body.department,
    };

    if (req.body.year) {
      filter.year = req.body.year;
    }

    if (req.body.semester) {
      filter.semester = req.body.semester;
    }

    const timetable = await TimeTable.find(filter);

    res.status(200).json(timetable);
  } catch (err) {
    res.status(500).json(err);
  }
});


//get user

router.get("/:id", async (req, res) => {
  try {
    //console.log(req.params.id)
    const timeTable = await TimeTable.findById(req.params.id);
    res.status(200).json(timeTable);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post

router.post("/add", async (req, res) => {
  const newtimeTable = new TimeTable(req.body);
  try {
    await newtimeTable.save();
    res.status(200).json("Post saved successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/update/:id", async (req, res) => {
  try {
    const timeTable = await TimeTable.findById(req.params.id);
    if (timeTable._id.toString() === req.body._id) {
      await timeTable.updateOne({ $set: req.body });
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
    const timeTable = await TimeTable.findById(req.params.id);
    if (timeTable._id.toString() === req.body._id) {
      await timeTable.deleteOne();
      res.status(200).json("Post deleted Successfully");
    } else {
      res.status(403).json("You can delete only your account");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;