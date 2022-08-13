import { Body, Controller, Del, Get, Inject, Post, Query} from "@midwayjs/decorator";
import { Context } from "koa";
import { Book } from "../entity/book";

import { BookService } from "../service/book.service";

@Controller('/book')
export class BookController{
  @Inject()
  ctx: Context;

  @Inject()
  bookService: BookService


  @Get('/all')
  async getBookList() {
    const { result, count } = await this.bookService.getBooksList()
    return { success: true, message: 'OK', data: result,total: count };
  }
  @Post('/save')
  async saveMusic(@Body() book:Book) {
    const {result,count} = await this.bookService.saveBook(book)
    return {
      success: true, message: '成功',data: result,total: count
    }
  }
  @Del('/delete')
  async deleteMusic(@Query('id') id:string) {
    const {result,count} = await this.bookService.delBook(id)
    return {
      success: true, message: '成功',data: result,total: count
    }
  }
}