const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors()); 

// Database connection with MongoDb

mongoose
  .connect("mongodb+srv://ecommerceMern:user123@cluster0.itfdpke.mongodb.net/ecommerce-mern?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

// API Creation

app.get("/", (req, res) => {
    res.send("Express App is running");
})

app.get("/debug", (req, res) => {
    res.json({
        message: "Debug endpoint hit successfully!"
    });
});

// image storage engine

const storage  = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer ({storage:storage})

// create upload endpoint for images

app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `https://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port, (error) => {
    if(!error) {
        console.log("Server is running on port" + port);
    } else {
        console.log("Error: " + error); 
    }
})