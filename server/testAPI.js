const axios = require("axios");

const data = {
  name: "Swastika Chatterjee",
  email: "swastika@gmail.com",
  phone: "1234567890",
  address: "Kolkata",

  degree: "B.Tech CSE",
  institution: "KIIT University",
  year: "2027",

  company: "Oracle Internship",
  role: "Intern",
  duration: "2 Months",
  description: "Worked on Oracle APEX projects",

  projectName: "Resume Generator",
  technologies: "React, Node.js, MongoDB",
  projectDescription: "AI-powered Resume Generator",

  skills: "Java, Python, React, MongoDB",
};

axios
  .post("http://localhost:5000/api/resume/save", data)
  .then((res) => {
    console.log("SUCCESS");
    console.log(res.data);
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err.response?.data || err.message);
  });