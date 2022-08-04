import {   PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
export abstract class Common {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @UpdateDateColumn()
  updateDate:string;
}
