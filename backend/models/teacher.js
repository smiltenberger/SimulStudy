const Mongoose = require("mongoose")
const teacherSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
})
Mongoose.model("teacher", teacherSchema)