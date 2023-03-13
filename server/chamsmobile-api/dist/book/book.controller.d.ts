import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/udateBook.dto';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getBooks(): Promise<import("./entity/book").Book[]>;
    getBook(id: string): Promise<import("./entity/book").Book>;
    createBook(bookDto: BookDto): Promise<import("./entity/book").Book>;
    updateBook(updateBookDto: UpdateBookDto, id: string): Promise<import("./entity/book").Book[]>;
    deleteBook(id: string): Promise<string>;
    deleteBooks(): Promise<string>;
}
