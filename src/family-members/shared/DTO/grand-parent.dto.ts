import { IsNotEmpty, IsOptional } from "class-validator";
import { Parent } from "../entities/parent";

export class GrandParentDto {
  
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  age: number;
  @IsOptional()
  parents: Parent[]

}