import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return '📚 Welcome to the Bookstore API!';
  }
}
