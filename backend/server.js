const express = require('express')
const app = express();
var bodyParser = require('body-parser')
const Teacher = require("./models/teacher");
const mongoose = require('mongoose');
var cors = require('cors')
const port = 3001

app.use(cors())

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

// parse application/json
app.use(bodyParser.json())

// "DB"
mongoose.connect("mongodb://localhost:27017/SimulStudy", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

const students = [
    {id: 1, name: "John Jr Smith"},
    {id: 2, name: "Allen Jr Smith"},
    {id: 3, name: "Sally Jr Smith"}
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Get all teachers
app.get('/teachers', async (req, res) => {
    // use teacher model
    const teachers = await Teacher.find(); // returns all the docs in the teachers collection
    res.json(teachers);
});

// Create a teacher
app.post('/teachers', async (req, res) => {
    const newTeacherData = req.body; // { name: "Adam", email: "email@email.com" }
    const newTeacher = new Teacher(newTeacherData);
    await newTeacher.save();
    res.json(newTeacher);
});

// Get one teach by id
// GET /teacher/2
app.get('/teachers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const teacher = await Teacher.findById(id);
        res.json(teacher);

    } catch (error) {
        res.status(404).json({error: "No teacher with that id"})
    }
    
});


// Create a student
app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json(students);
});

// Starts the server on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})