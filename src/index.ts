import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello world"));
app.listen(port, () => {
    //https://github.com/atulmy/crate.git
    // console.log(`example app listening on port ${port}`);
});
