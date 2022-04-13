const express = require('../frontend/node_modules/@types/express')
const app = express();
var bodyParser = require('../frontend/node_modules/@types/body-parser')
const mongoose = require('mongoose');
var cors = require('cors')
const port = 3000

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

const teachers = [
    {id: 1, name: "Allen Smith"},
    {id: 2, name: "John Smith"},
    {id: 3, name: "Sally Smith"}
]

const students = [
    {id: 1, name: "John Jr Smith"},
    {id: 2, name: "Allen Jr Smith"},
    {id: 3, name: "Sally Jr Smith"}
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Get all teachers
app.get('/teachers', (req, res) => {
    res.json(teachers);
});

// Create a teacher
app.post('/teachers', (req, res) => {
    const newTeacher = req.body;
    teachers.push(newTeacher);
    res.json(teachers);
});

// Get one teach by id
// GET /teacher/2
app.get('/teachers/:id', (req, res) => {
    const { id } = req.params;
    const teacher = teachers.find(teacher => teacher.id == id);
    res.json(teacher);
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