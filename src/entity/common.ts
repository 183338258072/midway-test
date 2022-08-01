import {  CreateDateColumn,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
export abstract class Common {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  date: string;

  @UpdateDateColumn()
  updateDate:string;
}
