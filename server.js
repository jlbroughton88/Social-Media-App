const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(3000 || process.env.PORT, () => {
    console.log("Server listening at port 3000");
})