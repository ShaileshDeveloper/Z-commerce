const mongoose = require("mongoose");

const dbconnection = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("succesful");
  } catch (err) {
    console.log(err, "error");
  }
};

module.exports = dbconnection;
