const mongoose=require("mongoose")

const jobApplicationSchema=new mongoose.Schema({
   userId :{
    type:String,
    required: true,
   },
   userName:{
    type:String,
    required: true,
   },
   jobId:{
    type:String,
    required: true
   },
   jobTitle:{
    type:String,
    required: true,
   },
   companyId:{
    type:String,
    required: true,
   },
   companyName:{
    type:String,
    required: true,
   },
   applicationDate:{
    type:String,
    required: true,
   },
   status:{
    type:String,
    required: true,
    default:"applied"
   }
})

const JobApplicationModel = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = JobApplicationModel;
