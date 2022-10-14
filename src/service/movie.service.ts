import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entity/movie';

@Provide()
export class MovieService {
  @InjectEntityModel(Movie)
  movieModel: Repository<Movie>;

  async getMoviesAll() {
    const [result, count] = await this.movieModel.findAndCount();
    return { result, count };
  }
  async saveMovie(data: Movie) {
    const movie = new Movie();
    movie.author = data.author;
    movie.name = data.name;
    movie.date = data.date;
    await this.movieModel.save(movie);
    const [result, count] = await this.movieModel.findAndCount();
    return {
      result,
      count,
    };
  }
  async deleteMovie(id) {
    const res = await this.movieModel.find({
      where: {
        id,
      },
    });
    await this.movieModel.remove(res);
    const [result, count] = await this.movieModel.findAndCount();
    return {
      result,
      count,
    };
  }
}
