const dbconnection = require("./dbconnection");
const { userModel } = require("./models/userModel");
const { productModel } = require("./models/productModel");
const orderModel = require("./models/orderModel");
const { usersData } = require("./users");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const products = require("./products");

dotenv.config();
dbconnection();

const importData = async () => {
  try {
    const createdUser = await userModel.insertMany(usersData);
    console.log("done");
    const adminUser = createdUser[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await productModel.insertMany(sampleProducts);
    console.log("import successful");
  } catch (error) {
    console.log("error", error.message);
  }
};
const deleteData = async () => {
  try {
    const createdUser = await userModel.deleteMany();
    await productModel.deleteMany();

    console.log("import successful");
  } catch (error) {
    console.log("error", error.message);
  }
};

importData();
