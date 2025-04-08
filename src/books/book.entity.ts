import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  category!: string;

  @Column('decimal')
  price!: number;

  @Column('float')
  rating!: number;

  @Column({ type: 'date' })
  publishedDate!: Date;
}
