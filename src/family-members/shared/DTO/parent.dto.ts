import { IsNotEmpty, IsOptional } from "class-validator";
import { GrandParent } from "../Entities/grandParent";

export class ParentDto {

  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  age: number;
  @IsOptional()
  grandParent: GrandParent

}