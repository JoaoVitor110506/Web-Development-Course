import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
app.get("/", (_request, response) => {
  response.json({ class: "Server", port: "3000" });
});
