import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'baseFamilyMember ', schema: 'public'})
export class BaseFamilyMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

}