import { Entity, OneToMany } from "typeorm";
import { Parent } from "./parent";
import { BaseFamilyMember } from "./baseFamilyMember";

@Entity({name: 'grandParent', schema: 'public'})
export class GrandParent extends BaseFamilyMember {
  
  @OneToMany(() => Parent, parent => parent.grandParent)
  parents: Parent[];

}