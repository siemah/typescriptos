import mongoose from 'mongoose';

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected MongoDB!");
  }
});

export interface IBook extends mongoose.Document {
  title: string;
  author: number;
};

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true},
  author: Number,
});

const Book = mongoose.model<IBook>('book', BookSchema);
export default Book;