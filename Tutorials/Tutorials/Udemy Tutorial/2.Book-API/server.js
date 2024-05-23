const express = require("express");
const app = express();
const PORT = 8082;

const books = [
  { id: 1, title: "The great Gatsby", author: "F.Scott" },
  { id: 2, title: "The Moby Dick", author: "Herman" },
  { id: 3, title: "The MERN Stack", author: "Masynctech" },
];
//Home Route
app.get("/", (req, res) => {
  res.json({
    status: "success!",
    message: "Welcome to my first book API using express",
  });
});

//Fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "Books fetched successfully",
    data: books,
  });
});

//Fetch a book
app.get("/books:id", (req, res) => {
  console.log(req.params);

  res.json({
    status: "success",
    message: "Books fetched successfully",
  });
});

//start the server
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
