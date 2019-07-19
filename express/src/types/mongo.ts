import { Document } from 'mongoose'
// mongo error message 
export interface MongoErrorMessage {
  (err: any): string;
}
export interface IBook extends Document {
  title: string;
  author: number;
};