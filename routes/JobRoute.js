const express = require("express");
const router = express.Router();

const { GetJobDetails,GetAllJobDetails,CreateJobPost,} = require("../controller/JobController");

router.post('/getjob',GetJobDetails);
router.get('/getAlljob',GetAllJobDetails);
router.post('/jobpost', CreateJobPost);


module.exports = router;