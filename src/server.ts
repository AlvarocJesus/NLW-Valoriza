import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("ola nlw");
});

app.post("/test-post", (req, res) => {
  return res.send("ola nlw metodo post");
});

app.listen(3000, () => console.log("server is running"));
