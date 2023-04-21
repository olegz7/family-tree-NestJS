import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from '../shared/entities/parent';
import { Repository } from 'typeorm';
import { FamilyService } from '../shared/services/family.service';

import { GrandParentDto } from '../shared/DTO/grand-parent.dto';
import { GrandParent } from '../shared/entities/grandParent';

@Injectable()
export class ParentsService extends FamilyService{

  constructor(
    @InjectRepository(Parent) private readonly parentRepo: Repository<Parent>,
    @InjectRepository(GrandParent) private readonly grandParentRepo: Repository<GrandParent>
  ) {
    super(parentRepo)
  }

  async createParent(id: number, createParentDtoDetails) {

    const grandParent: GrandParentDto = await this.grandParentRepo.findOneBy({id})
    if(!grandParent) {
      const newParent: Parent = new Parent();
      const {name, surname} = createParentDtoDetails
      newParent.name = name;
      newParent.surname = surname;
    }
     
    // create parent entity and save it in db
    const newParent: Parent = new Parent();
    const {name, surname} = createParentDtoDetails
    newParent.name = name;
    newParent.surname = surname;

    const createdParent = this.parentRepo.create({
      ...newParent,
      grandParent
    });
    return await this.parentRepo.save(createdParent);
  }

  async getParentsByGrandParent(id) {
    const grandParent = await this.grandParentRepo.findOne({
      relations: ['parents'],
      where: {id: id},
    })
    if(!grandParent) 
      throw new HttpException(
        'Grandparent is not found',
        HttpStatus.BAD_REQUEST,
      )
    return grandParent
  }
}
