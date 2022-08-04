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
    const {result, count} = await this.musicService.getMusicList();
    return { success: true, message: 'OK', data:result,total: count };
  }

  // @Get('/find')
  // async findMusic(@Query('params') params: string) {
  //   const music = await this.musicService.findMusicOne(params);
  //   console.log(music);
  //   return { success: true, message: 'OK', data: music };
  // }

  @Post('/save')
  async saveMusic(@Body() music:Music) {
    const {result,count} = await this.musicService.saveMusic(music)
    return {
      success: true, message: '成功',data: result,total: count
    }
  }
  @Del('/delete')
  async deleteMusic(@Query('id') id:number) {
    const {result,count} = await this.musicService.deleteMusic(id)
    return {
      success: true, message: '成功',data: result,total: count
    }
  }
  @Post('/update')
  async updateMusic(@Body() music:Music) {
    
    const {result,count} = await this.musicService.updateMusic(music)
    return {
      success: true, message: '成功',data: result,total: count
    }
  }
}
