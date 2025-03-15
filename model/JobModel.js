const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  
  experience: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  posted: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String],
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
  },
  benefits: {
    type: [String],
    required: true,
  },
});


module.exports = mongoose.model("Job", JobSchema);