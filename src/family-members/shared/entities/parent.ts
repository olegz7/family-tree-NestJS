import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GrandParent } from "./grandParent";

@Entity({name: 'parent', schema: 'public'})
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @ManyToOne(() => GrandParent, grandParent => grandParent.parents, { nullable: true })
  grandParent: GrandParent;
} 