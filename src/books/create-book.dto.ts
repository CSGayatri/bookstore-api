import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsString()
  category!: string;

  @IsNumber()
  price!: number;

  @IsNumber()
  rating!: number;

  @IsDateString()
  publishedDate!: string;
}
