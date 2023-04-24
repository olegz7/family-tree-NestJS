import { Entity, ManyToOne, OneToMany} from "typeorm";
import { GrandParent } from "./grandParent";
import { BaseFamilyMember } from "./baseFamilyMember";
import { Child } from "./child";

@Entity({name: 'parent', schema: 'public'})
export class Parent extends BaseFamilyMember {
 
  @ManyToOne(() => GrandParent, grandParent => grandParent.parents, { nullable: true })
  grandParent: GrandParent;

  @OneToMany(() => Child, child => child.parent)
  children: Child[];

} 