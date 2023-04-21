import { IsNotEmpty, IsOptional } from "class-validator";
import { Parent } from "src/family-members/shared/entities/parent";

export class GrandParentDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  age: number;

}