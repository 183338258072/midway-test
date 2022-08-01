import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { Repository } from "typeorm";
import { Movie } from "../entity/movie";

@Provide()
export class MovieService {
  @InjectEntityModel(Movie)
  movieModel: Repository<Movie>;

  async getMovieAll() {
    const res = await this.movieModel.findAndCount()
    return res;
  }
}