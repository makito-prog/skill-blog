require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Thread = require("./models/Thread"); // モデルのインポート
const API_Key = process.env.API_KEY; // 環境変数からAPIキーを取得

const PORT = 3000;

app.use(express.static("public")); // 静的ファイルの提供
app.use(express.json()); // JSONパース用のミドルウェア

console.log("Starting server...");

mongoose.connect(
    `mongodb+srv://makito:${API_Key}@cluster0.1ygsfkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then(() => {
    console.log("db connected");
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
}).catch((err) => {
    console.log("DB connection error:", err);
});

// GET /api/threads エンドポイント
app.get("/api/threads", async (req, res) => {
    try {
        const allThreads = await Thread.find({});
        res.status(200).json(allThreads);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

// POST /api/thread エンドポイント
app.post("/api/thread", async (req, res) => {
    try {
        const createThread = await Thread.create(req.body);
        res.status(201).json(createThread);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});
