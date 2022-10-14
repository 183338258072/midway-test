import { Provide, sleep } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Music } from '../entity/music';
import { Repository } from 'typeorm';
@Provide()
export class MusicService {
  @InjectEntityModel(Music)
  musicModel: Repository<Music>;

  async getMusicList() {
    const [result, count] = await this.musicModel.findAndCount();
    return {
      result,
      count,
    };
  }
  async saveMusic(data: Music) {
    const music = new Music();
    music.name = data.name;
    music.author = data.author;
    music.date = data.date;
    await this.musicModel.save(music);
    const [result, count] = await this.musicModel.findAndCount();
    return {
      result,
      count,
    };
  }
  async findMusicOne(id: string) {
    const result = await this.musicModel.findOne({
      where: {
        name: id,
      },
    });
    if (id === '2') {
      sleep(2000);
    }
    return result;
  }
  async deleteMusic(id: string) {
    const res = await this.musicModel.findOne({
      where: {
        id: id,
      },
    });
    await this.musicModel.remove(res);
    const [result, count] = await this.musicModel.findAndCount();
    return {
      result,
      count,
    };
  }
  async updateMusic(params: any) {
    const update = await this.musicModel.findOne({
      where: {
        name: params.name,
      },
    });
    update.name = params.name;
    update.author = params.author;
    update.date = params.date;
    await this.musicModel.save(update);
    const [result, count] = await this.musicModel.findAndCount();
    return {
      result,
      count,
    };
  }
}
