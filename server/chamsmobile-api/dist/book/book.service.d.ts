import { BookDto } from './dto/book.dto';
import { Book } from './entity/book';
import { UpdateBookDto } from './dto/udateBook.dto';
import { Repository } from 'typeorm';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    getBooks(): Promise<Book[]>;
    getBook(id: string): Promise<Book>;
    createBook(book: BookDto): Promise<Book>;
    updateBook(updateBookDto: UpdateBookDto, id: string): Promise<Book[]>;
    deleteBook(id: string): Promise<string>;
    deleteBooks(): Promise<string>;
}
