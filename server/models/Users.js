const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    googleId: String,
});

mongoose.model("users", UsersSchema);
