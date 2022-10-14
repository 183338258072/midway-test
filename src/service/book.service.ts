import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entity/book';

@Provide()
export class BookService {
  @InjectEntityModel(Book)
  bookModel: Repository<Book>;

  async getBooksList() {
    const [result, count] = await this.bookModel.findAndCount();
    return {
      result,
      count,
    };
  }
  async saveBook(books: Book) {
    const book = new Book();
    book.author = books.author;
    book.date = books.date;
    book.name = books.name;
    await this.bookModel.save(book);
    const [result, count] = await this.bookModel.findAndCount();
    return {
      result,
      count,
    };
  }
  async delBook(id: string) {
    const res = await this.bookModel.find({
      where: {
        id,
      },
    });
    await this.bookModel.remove(res);
    const [result, count] = await this.bookModel.findAndCount();
    return {
      result,
      count,
    };
  }
}
