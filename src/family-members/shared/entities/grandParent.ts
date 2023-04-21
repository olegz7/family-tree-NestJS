import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parent } from "./parent";

@Entity({name: 'grandParent', schema: 'public'})
export class GrandParent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany(() => Parent, parent => parent.grandParent)
  parents: Parent[];

}