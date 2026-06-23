const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  // Personal
  name: String,
  email: String,
  phone: String,
  address: String,

  linkedin: String,
  github: String,

  objective: String,

  // Education
  degree: String,
  institution: String,
  year: String,

  // Experiences
  experiences: [
    {
      company: String,
      role: String,
      duration: String,
      description: String,
    },
  ],

  // Projects
  projects: [
    {
      name: String,
      technologies: String,
      description: String,
    },
  ],

  // Certificates
  certificates: [
    {
      title: String,
      issuer: String,
    },
  ],

  skills: String,

  achievements: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Resume",
  ResumeSchema
);