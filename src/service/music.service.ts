import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Music } from '../entity/music';
import { Repository } from 'typeorm';
@Provide()
export class MusicService {
  @InjectEntityModel(Music)
  musicModel: Repository<Music>;

  async getMusicList() {
    const result = await this.musicModel.findAndCount();
    return result;
  }
  async saveMusic(data: Music) {
    const music = new Music();
    music.name = data.name;
    music.author = data.author;
    music.date = data.date;
    const musicResult = await this.musicModel.save(music);
    console.log(musicResult, 'musicResult');
    
    const [result,count] = await this.musicModel.findAndCount()
    return {
      result,
      count
    }
  }
  async findMusicOne(params: string) {
    const result = await this.musicModel.findOne({
      where: {
        author: params,
      },
    });
    return result;
  }
  async deleteMusic(id: number) {
    const res = await this.musicModel.findOne({
      where: {
        id: id,
      },
    });
    await this.musicModel.remove(res);
    const [result,count] = await this.musicModel.findAndCount()
    return {
      result,
      count
    }

  }
}
