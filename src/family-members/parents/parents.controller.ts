import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ParentDto } from '../shared/DTO/parent.dto';
import { ParentsService } from './parents.service';

@Controller()
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  // Get all parents 
  @Get('/parents')
  async getAllParents() {
    return this.parentsService.getAllMembers({
      relations: ['grandParent']
    });
  }

  // Get all parents that are relative to specific grandParent
  @Get('grand-parents/:id/parents')
  async getParentsByGrandParent(@Param('id', ParseIntPipe) id: number) {
    const gparent = await this.parentsService.getParentsByGrandParent(id);
    return gparent.parents
  }

  
   // Create a parent with an optional grandParent 
   @Post('grand-parents/add/parent')
   async createParent(
     @Body() createParentDto: ParentDto
   ) {
      return await this.parentsService.createParent(createParentDto);
   }

  // TODO add update and delete functionality to parents

}
