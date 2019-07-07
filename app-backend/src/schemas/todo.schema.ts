import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const TodoSchema = new mongoose.Schema({
    task: String,
    date: String,
    status: Number,
    createdBy: String 
})