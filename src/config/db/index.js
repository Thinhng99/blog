const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
