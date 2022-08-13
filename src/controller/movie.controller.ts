import { Body, Controller, Del, Get, Inject, Post, Query } from "@midwayjs/decorator";
import { Context } from "koa";
import { Movie } from "../entity/movie";
import {  MovieService } from "../service/movie.service";

@Controller('/movie')
export class MovieController {
  @Inject()
  ctx: Context;

  @Inject()
  movieService: MovieService

  // 查询所有
  @Get('/all')
  async getMovieAll() {
    const {result, count} = await this.movieService.getMoviesAll()
    return { success: true, message: 'OK', data: result,total: count };
  }
  // 保存新数据
  @Post('/add')
  async addMovie(@Body() data:Movie) {
    const { result, count } = await this.movieService.saveMovie(data)
    return { success: true, message: 'OK', data: result,total: count };
  }
  @Del('/delete')
  async deleteMovies(@Query('id') id:string) {
    const { result, count } = await this.movieService.deleteMovie(id)
    return { success: true, message: 'OK', data: result,total: count };
  }

}