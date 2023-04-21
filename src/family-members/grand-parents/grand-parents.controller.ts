import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GrandParentDto } from '../shared/DTO/grand-parent.dto';
import { GrandParentsService } from './grand-parents.service';

@Controller()
export class FamilyMemberController {
  constructor(private readonly grandParentService: GrandParentsService) {}

  @Get('grand-parents')
  async getAllGrandParents() {
    return this.grandParentService.getAllMembers({
      relations: ['parents'],
      // // another syntax
      // relations: {parents: true}

      // // if we want to get grandParents filtering by their properties
      // where: {
      //   name: 'tatd'
      // }

      // if we want to get grandParents filtering by properties of related entity
    // }).then((grandParents) => { 
    //   let filteredGrandParents = []
    //     grandParents.forEach(grandParent => {
    //       grandParent.parents.filter((parent) => {
    //         if(parent.name === 'new1' && !filteredGrandParents.includes(grandParent))
    //         filteredGrandParents.push(grandParent)
    //       })
    //     })
    //     return filteredGrandParents
    //   })
            
    })
  }

  @Post('add/grand-parent')
  async addGrandParent(@Body() data: GrandParentDto) {
    return this.grandParentService.createGrandParent(data)
  }

  @Patch('update/grand-parent/:id')
  async updateGrandParent(
    @Body('name') name: string,
    @Body('age') age: string,
    @Param('id') id: number
    ) {
      if(!name && !age) {
        throw new BadRequestException("Please fill out the name and age fields")
      }
      await this.grandParentService.updateFamilyMember(id, {name, age})
      return this.grandParentService.getFamilyMemberBy({id})
    }

    @Delete('delete/grand-parent/:id')
    async deleteGrandParent(
      @Param('id') id: number
    ) {
      return await this.grandParentService.deleteFamilyMember(id)
    }
}
