import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { TodoService } from './todo.service'

@Controller('todo')
export class TodoController {
     constructor(private todoService:TodoService){}

     @Get('todos')
     async getAllCustomer(@Res() res) {
        const todos = await this.todoService.getAllTodos();
        return res.status(HttpStatus.OK).json(todos);
     }
}
