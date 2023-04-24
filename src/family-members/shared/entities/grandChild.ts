import { Entity, ManyToOne } from "typeorm";
import { BaseFamilyMember } from "./baseFamilyMember";
import { Child } from "./child";

@Entity({name: 'grandChild', schema: 'public'})
export class GrandChild extends BaseFamilyMember {
 
  @ManyToOne(() => Child, child => child.grandChildren, { nullable: true })
  child: Child;

} 