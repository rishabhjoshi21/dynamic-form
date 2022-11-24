const { request } = require("express");
const express = require("express");
const router = express.Router();
const dataObj = require("../model/pappercloud");

router.post("/create", async (req, res) => {
  let record;
  try {
    record = await dataObj.create({
      ...req.body,
      isDeleted: false,
      isEdited: false,
    });
    res.json(record);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.post("/delete", async (req, res) => {
  let record;
  try {
    record = await dataObj.updateOne({ _id: req.body.id }, { isDeleted: true });
    res.json(record);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.post("/edit", async (req, res) => {
  let record;
  try {
    record = await dataObj.updateOne(
      { _id: req.body._id },
      { ...req.body, isEdited: true }
    );
    res.json(record);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.get("/", async (req, res) => {
  let record;
  try {
    record = await dataObj.find({ isDeleted: false });
    res.json(record);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.get("/getSingle/:id", async (req, res) => {
  let record;
  try {
    record = await dataObj.findOne({ isDeleted: false, _id: req.params.id });
    res.json(record);
  } catch (err) {
    res.send("Error " + err);
  }
});
module.exports = router;
