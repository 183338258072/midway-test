import { MidwayConfig } from '@midwayjs/core';
import { Book } from '../entity/book';
import { Movie } from '../entity/movie';
import { Music } from '../entity/music';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1659235279065_4317',
  koa: {
    port: 7001,
  },
  cors: {
    credentials: false,
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '623811ws',
        database: 'service',
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
        logging: false,
        entities: [Music, Movie, Book],
      },
    },
  },
} as MidwayConfig;
