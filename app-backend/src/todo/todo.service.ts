import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../interface/todo.interface';


@Injectable()
export class TodoService {
       constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>){

       }

       async getAllTodos(): Promise<Todo[]> {
           console.log('dddddd')
           const todos = await this.todoModel.find().exec();
           return todos;
       }
}
