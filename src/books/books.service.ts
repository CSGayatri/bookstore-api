import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepo: Repository<Book>,
  ) {}

  create(dto: CreateBookDto) {
    const book = this.bookRepo.create(dto);
    return this.bookRepo.save(book);
  }

  findAll(query: any) {
    const {
      author,
      category,
      rating,
      title,
      sortBy,
      sortOrder = 'ASC',
      page = 1,
      limit = 10,
    } = query;

    const where: any = {};
    if (author) where.author = ILike(`%${author}%`);
    if (category) where.category = ILike(`%${category}%`);
    if (rating) where.rating = +rating;
    if (title) where.title = ILike(`%${title}%`);

    const order: any = {};
    if (sortBy) order[sortBy] = sortOrder.toUpperCase();

    return this.bookRepo.find({
      where,
      order,
      take: +limit,
      skip: (+page - 1) * +limit,
    });
  }

  findOne(id: number) {
    return this.bookRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateBookDto) {
    const book = await this.bookRepo.findOneBy({ id });
    if (!book) throw new NotFoundException('Book not found');
    Object.assign(book, dto);
    return this.bookRepo.save(book);
  }

  async remove(id: number) {
    const book = await this.bookRepo.findOneBy({ id });
    if (!book) throw new NotFoundException('Book not found');
    return this.bookRepo.remove(book);
  }
}
