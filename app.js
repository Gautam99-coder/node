const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Import user router
const userRouter = require("./Routers/userRouter");
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
