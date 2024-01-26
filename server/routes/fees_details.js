const router = require("express").Router();
//const bcrypt = require("bcrypt");
const Fees = require("../models/FeesDetails");

//get user

router.get("/:id", async (req, res) => {
    try {
      //console.log(req.params.id)
      const fees = await Fees.findById(req.params.id);
      res.status(200).json(fees);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//post

router.post("/add", async (req, res) => {
  const newFees = new Fees(req.body);
  try {
    const savedFees = await newFees.save();
    res.status(200).json(savedFees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/:id", async (req, res) => {
  try {
    const fees = await Fees.findById(req.params.id);
    if (fees._id.toString() === req.body._id) {
      await fees.updateOne({ $set: req.body });
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
    const fees = await Fees.findById(req.params.id);
    if (fees._id.toString() === req.body._id) {
      await fees.deleteOne();
      res.status(200).json("Post deleted Successfully");
    } else {
      res.status(403).json("You can delete only your account");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;