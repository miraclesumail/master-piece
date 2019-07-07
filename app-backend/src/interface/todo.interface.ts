import { Document } from 'mongoose';

export interface Todo extends Document {
    readonly task: string;
    readonly date: string;
    readonly status: number;
    readonly createdBy: string;
}
