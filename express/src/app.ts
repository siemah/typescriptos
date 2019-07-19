import express, { Application, Request, Response, NextFunction, } from "express";
import * as BookRoute from './routes/book'

const app: Application = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true, }));

app.get("/books", BookRoute.allBooks);
app.get("/book/:id", BookRoute.getBook);
app.post("/book", BookRoute.addBook);
app.put("/book/:id", BookRoute.updateBook);
app.delete("/book/:id", BookRoute.deleteBook);

app.listen(3333, () => console.log("server runing"));