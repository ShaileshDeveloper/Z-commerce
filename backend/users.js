const bcrypt = require("bcrpytjs");

const usersData = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John doe",
    email: "John@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = {usersData};
