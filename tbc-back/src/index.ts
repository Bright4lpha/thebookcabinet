import express from "express";
import connectDB from "./db";

import booksRouter from "./books/books.routes";

const app = express();
const PORT = 4000;

app.use(express.json());

connectDB();

app.use("/books", booksRouter);
app.get("/", (req, res) => {
    res.send(
        `Hello from The Book Cabinet ! Your Node Express server is running on port ${PORT}`
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const file = fs.readFileSync("./src/swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
