const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-sequence")(mongoose);
const User = new Schema(
  {
    _id: { type: Number },
    username: {
      type: String,
      maxLength: 255,
      required: [true, "please add the user name"],
    },
    email: {
      type: String,
      maxLength: 255,
      required: [true, "please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      maxLength: 255,
      required: [true, "please add the user password"],
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

User.plugin(autoIncrement, { inc_field: "_id" });

module.exports = mongoose.model("User", User);
