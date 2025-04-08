import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    Query,
    UseGuards,
  } from '@nestjs/common';
  import { BooksService } from './books.service';
  import { CreateBookDto } from './dto/create-book.dto';
  import { UpdateBookDto } from './dto/update-book.dto';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  
  @UseGuards(JwtAuthGuard)
  @Controller('books')
  export class BooksController {
    constructor(private readonly booksService: BooksService) {}
  
    @Post()
    create(@Body() dto: CreateBookDto) {
      return this.booksService.create(dto);
    }
  
    @Get()
    findAll(@Query() query: any) {
      return this.booksService.findAll(query);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.booksService.findOne(+id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateBookDto) {
      return this.booksService.update(+id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.booksService.remove(+id);
    }
  }
  
