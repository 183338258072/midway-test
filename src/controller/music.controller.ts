import { Body, Controller, Del, Get, Inject, Post, Query } from '@midwayjs/decorator';
import { Context } from 'vm';
import { Music } from '../entity/music';
import { MusicService } from '../service/music.service';

@Controller('/music')
export class MusicController {
  @Inject()
  ctx: Context;

  @Inject()
  musicService: MusicService;

  @Get('/all')
  async getMusicAll() {
    const [data, count] = await this.musicService.getMusicList();
    console.log(data, count);
    return { success: true, message: 'OK', data,total: count };
  }

  @Get('/find')
  async findMusic(@Query('params') params: string) {
    const music = await this.musicService.findMusicOne(params);
    console.log(music);
    return { success: true, message: 'OK', data: music };
  }

  @Post('/save')
  async saveMusic(@Body() music:Music) {
    const {result,count} = await this.musicService.saveMusic(music)
    return {
      success: true, message: '成功',data: result,total: count
    }
  }
  @Del('/delete')
  async deleteMusic(@Query('id') id:string) {
    const {result,count} = await this.musicService.deleteMusic(id)
    return {
      success: true, message: '成功',data: result,total: count
    }
    
  }
}
