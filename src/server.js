const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Thread = require("./models/Thread");

const PORT = 3000;

app.use(express.static("public"));

mongoose.connect(
    "mongodb+srv://makito:makito2628@cluster0.1ygsfkh.mongodb.net/"
).then(() => console.log("db connected")
).catch((err) => console.log(err));

// getメソッド
app.get("/api/threads", async(req, res) => {
    try {
        const allThreads = await Thread.find({});
        res.status(200).json(allThreads);
    } catch(err) {
        console.log(err);
    }
});

// postメソッド
app.post("/api/thread", async(req, res) => {
    try {
        const createThread = await Thread.create(req, body);
        res.status(200).json(allThreads);
    } catch(err) {
        console.log(err);
    }
});

app.listen(PORT, console.log("server running"));
