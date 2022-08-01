import { Column, Entity } from "typeorm";
import { Common } from "./common";

@Entity('movie')
export class Movie extends Common {

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  author: string;

}
