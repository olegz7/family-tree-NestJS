import { Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseFamilyMember } from "./baseFamilyMember";
import { Parent } from "./parent";
import { GrandChild } from "./grandChild";

@Entity({name: 'child', schema: 'public'})
export class Child extends BaseFamilyMember {
 
  @ManyToOne(() => Parent, parent => parent.children, { nullable: true })
  parent: Parent;

  @OneToMany(() => GrandChild, grandChild => grandChild.child)
  grandChildren: GrandChild[];

} 