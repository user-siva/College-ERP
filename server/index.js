const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");

const studentRouter = require("./routes/students");
const staffRouter = require("./routes/staffs");
const studentAttendanceRouter = require("./routes/studentAttendance");
const subjectRouter = require("./routes/subject");
const timeTableRouter = require("./routes/timetable");



dotenv.config();

mongoose.connect(process.env.DB_URI).then(()=>{
console.log("connected to mongodb");
//console.log(path.join(__dirname, "public/images"));
}).catch((err) => { console.error(err); });;

//middlewares

//app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));

app.use("/api/student", studentRouter);
app.use("/api/staff", staffRouter);
app.use("/api/studentAttendance", studentAttendanceRouter);
app.use("/api/subject", subjectRouter);
app.use("/api/timetable", timeTableRouter);




app.listen(5000, () => {
  console.log("server running....");
  console.log(process.env.DB_URI);
});

