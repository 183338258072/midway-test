import { Controller, Get, Inject } from "@midwayjs/decorator";
import { Context } from "koa";
import {  MovieService } from "../service/movie.service";

@Controller('/movie')
export class MovieController {
  @Inject()
  ctx: Context;

  @Inject()
  movieService: MovieService

  @Get('/all')
  async getMovieAll() {
    const {result, count} = await this.movieService.getMoviesAll()
    return { success: true, message: 'OK', data: result,total: count };
  }
}