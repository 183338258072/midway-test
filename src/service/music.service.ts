import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Music } from '../entity/music';
import { Repository } from 'typeorm';
@Provide()
export class MusicService {
  @InjectEntityModel(Music)
  musicModel: Repository<Music>;
  async getMusicList() {
    return {
      name: 'lfp',
      author: 'l123',
      date: '2022-07-31',
    };
  }
  async saveMusic() {
    // create a entity object
    const music = new Music();
    music.name = '渡口';
    music.author = '蔡琴';
    music.date = '2022-07-31';
    // save entity
    const musicResult = await this.musicModel.save(music);
    // save success
    console.log('music id = ', musicResult.id);
  }
  async findMusicOne() {
    const result = await this.musicModel.findOne({
      where: {
        author: '蔡琴',
      },
    });
    console.log(result, 'result');
    return result;
  }
}
