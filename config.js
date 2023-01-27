const mongoose = require("mongoose");

async function connectDb(){
  try {
    mongoose.set('strictQuery', true);//from terminal
    await mongoose.connect(
      "mongodb+srv://Vyshnavi:Vyshnavi@cluster0.w6wycc3.mongodb.net/jobportal?retryWrites=true&w=majority"
    );
    console.log("DataBase Conneted")
  } catch (error) {
    console.log("Error")
  }
}

module.exports=connectDb