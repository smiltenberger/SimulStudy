const Mongoose = require("mongoose");
const teacherSchema = new Mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
const Teacher = Mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
