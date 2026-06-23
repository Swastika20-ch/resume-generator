const express = require("express");
const router = express.Router();

const Resume = require("../models/Resume");

// SAVE RESUME
router.post("/save", async (req, res) => {
  try {
    const resume = new Resume(req.body);

    const savedResume = await resume.save();

    res.status(201).json({
      success: true,
      message: "Resume Saved Successfully",
      data: savedResume,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET ALL RESUMES
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find().sort({
      createdAt: -1,
    });

    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET SINGLE RESUME
router.get("/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(
      req.params.id
    );

    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;