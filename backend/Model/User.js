const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  fname: {
    type: String,
    require: true,
  },

  lname: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
