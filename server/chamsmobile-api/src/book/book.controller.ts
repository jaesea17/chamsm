import { Controller, Get, Body, Post, Patch, Param, Delete, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/udateBook.dto';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService) { }

    @Get()
    async getBooks() {
        return await this.bookService.getBooks();
    }

    @Get('/:id')
    async getBook(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.bookService.getBook(id)
    }

    @Post()
    async createBook(@Body() bookDto: BookDto) {
        return await this.bookService.createBook(bookDto);
    }

    @Patch('/:id')
    async updateBook(@Body() updateBookDto: UpdateBookDto, @Param('id', new ParseUUIDPipe()) id: string) {
        return await this.bookService.updateBook(updateBookDto, id);
    }

    @Delete('/:id')
    async deleteBook(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.bookService.deleteBook(id);
    }

    @Delete()
    async deleteBooks() {
        return await this.bookService.deleteBooks();
    }
}
