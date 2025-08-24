const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema(
    {
        username: { type: String, maxLength: 255, required: [true, "please add the user name"] },
        email: { type: String, maxLength: 255, required: [true, "please add the user email address"], unique: [true, "Email address already taken"] },
        password: { type: String, maxLength: 255, required: [true, "please add the user password"] },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", User);
