import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { Book } from './entity/book';
import { UpdateBookDto } from './dto/udateBook.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {

    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) { }

    async getBooks(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async getBook(id: string): Promise<Book> {
        const book = await this.bookRepository.findOne({ where: { id } });
        if (!book) {
            throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
        }
        return book;
    }

    async createBook(book: BookDto): Promise<Book> {
        await this.bookRepository.save(book);
        return book as Book
    }

    async updateBook(updateBookDto: UpdateBookDto, id: string): Promise<Book[]> {
        await this.bookRepository.update({ id }, { ...updateBookDto });
        await this.bookRepository.find()
        return (await this.bookRepository.find());
    }

    async deleteBook(id: string): Promise<string> {
        await this.bookRepository.delete({ id })
        return id;
    }

    async deleteBooks(): Promise<string> {
        this.bookRepository.delete({})
        return " All Books deleted successfully";
    }
}
