export interface MongoErrorMessage {
  (err: any): string;
}