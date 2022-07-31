import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('music')
export class Music {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  author: string;

  @Column()
  date: string;
}
