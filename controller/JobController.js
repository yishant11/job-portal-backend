const Job = require("../model/JobModel");


exports.GetAllJobDetails = async (req, res) => {
  try {

    const JobDetails = await Job.find({});

    console.log("JobDetails :",JobDetails);

    if (JobDetails) {
      return res.status(200).json({
        success: true,
        JobDetails: JobDetails,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Something not Matched while searching in database",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};





exports.GetJobDetails = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { title, location, experience } = req.body;

    const filters = [];
    if (title && title.trim() !== "") {
      filters.push({ title: { $regex: title, $options: "i" } });
    }
    if (location && location.trim() !== "" && location !== "All Locations") {
      filters.push({ location: { $regex: location, $options: "i" } });
    }
    if (
      experience &&
      experience.trim() !== "" &&
      experience !== "All Experience"
    ) {
      filters.push({ experience: { $regex: experience, $options: "i" } });
    }

    const query = filters.length > 0 ? { $and: filters } : {};

    const jobDetails = await Job.find(query);

    if (jobDetails && jobDetails.length > 0) {
      return res.status(200).json({
        success: true,
        JobDetails: jobDetails,
      });
    }

    return res.status(400).json({
      success: false,
      message: "No job matched while searching in the database",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



exports.CreateJobPost = async (req, res) => {
  try {
    //   console.log("Noting");
      console.log("Req body : ",req.body);
    const {
      title,
      company,
      logo,
      location,
      type,
      experience,
      salary,
      posted,
      tags,
      description,
      responsibilities,
      requirements,
      benefits,
    } = req.body;

    const newJob = await Job.create({
      title: title,
      company: company,
      logo: logo,
      location: location,
      type: type,
      experience: experience,
      salary: salary,
      posted: posted,
      tags: tags,
      description: description,
      responsibilities: responsibilities,
      requirements: requirements,
      benefits: benefits,
    });

    return res.status(200).json({
      success: true,
      JobDetails: newJob,
      message: "Data Save",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
