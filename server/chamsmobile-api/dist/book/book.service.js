"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const book_1 = require("./entity/book");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getBooks() {
        return await this.bookRepository.find();
    }
    async getBook(id) {
        const book = await this.bookRepository.findOne({ where: { id } });
        if (!book) {
            throw new common_1.HttpException('NotFound', common_1.HttpStatus.NOT_FOUND);
        }
        return book;
    }
    async createBook(book) {
        await this.bookRepository.save(book);
        return book;
    }
    async updateBook(updateBookDto, id) {
        await this.bookRepository.update({ id }, Object.assign({}, updateBookDto));
        await this.bookRepository.find();
        return (await this.bookRepository.find());
    }
    async deleteBook(id) {
        await this.bookRepository.delete({ id });
        return id;
    }
    async deleteBooks() {
        this.bookRepository.delete({});
        return " All Books deleted successfully";
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(book_1.Book)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map