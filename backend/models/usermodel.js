const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const signupSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Signup = mongoose.model("Signup", signupSchema);




module.exports = {
  Signup,

};
