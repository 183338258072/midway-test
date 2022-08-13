import {   PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
export abstract class Common {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn()
  updateDate:string;
}
