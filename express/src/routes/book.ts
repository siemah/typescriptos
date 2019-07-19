import { Request, Response } from 'express';
import { getMongoErrorMessage } from '../tools/db'
import Book, { IBook } from '../models/book'

export const allBooks = (req: Request, res: Response) => {
  Book.find((err: any, books: any) => {
    if(err) res.send('not books find because ');
    else res.json({
      status: 'OK',
      books,
    })
  })
}

export const getBook = (req: Request, res: Response) => {
  console.log("book id is ", req.params.id)
  Book.findOne({_id: req.params.id }, (err: any, book: any) => {
    if (err) {
      res.send({
        status: 'NO',
        message: getMongoErrorMessage(err),
      });
    } else {
      res.send(book);
    }
  });
}

export const deleteBook = (req: Request, res: Response) => {
  res.send('delete a book');
}

export const updateBook = (req: Request, res: Response) => {
  res.send('update book');
}

export const addBook = (req: Request, res: Response) => {
  var book = new Book(req.body);

  book.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(book);
    }
  });
}