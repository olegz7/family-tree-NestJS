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

  // Create a parent
  @Post('grand-parents/:id/add/parent')
  async createParent(
    @Param('id', ParseIntPipe) id: number,
    @Body() createParentDto: ParentDto
  ) {
     return await this.parentsService.createParent(id, createParentDto);
  }

  // @Patch('update/parent/:id')
  // async updateGrandParent(
  //   @Body('name') name: string,
  //   @Body('surname') surname: string,
  //   @Param('id') id: number
  //   ) {
  //     if(name === '') {
  //       throw new BadRequestException("Please fill out the name field")
  //     }
  //     if(surname === '') {
  //       throw new BadRequestException("Please fill out the surname field")
  //     }
  //     await this.grandParentService.updateFamilyMember(id, {name, surname})
  //     return this.grandParentService.getFamilyMemberBy({id})
  //   }


}
