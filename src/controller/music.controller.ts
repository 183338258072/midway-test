import { Controller, Get, Inject } from '@midwayjs/decorator';
import { Context } from 'vm';
import { MusicService } from '../service/music.service';

@Controller('/music')
export class MusicController {
  @Inject()
  ctx: Context;

  @Inject()
  musicService: MusicService;

  @Get('/all')
  async getMusicAll() {
    const music = await this.musicService.findMusicOne();
    console.log(music);
    return { success: true, message: 'OK', data: music };
  }
}
