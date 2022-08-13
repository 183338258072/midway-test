import { Column, Entity } from "typeorm";
import { Common } from "./common";

@Entity('Book')
export class Book extends Common {

  @Column({
    length: 100,
  })
  name: string;
  @Column()
  date: string

  @Column()
  author: string;

}
