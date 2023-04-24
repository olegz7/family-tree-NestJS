import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from '../shared/entities/parent';
import { Repository } from 'typeorm';
import { FamilyService } from '../shared/services/family.service';
import { GrandParent } from '../shared/entities/grandParent';
import { ParentDto } from '../shared/DTO/parent.dto';

@Injectable()
export class ParentsService extends FamilyService{

  constructor(
    @InjectRepository(Parent) private readonly parentRepo: Repository<Parent>,
    @InjectRepository(GrandParent) private readonly grandParentRepo: Repository<GrandParent>
  ) {
    super(parentRepo)
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

  async createParent(createParentDtoDetails: ParentDto) {
 
    const newParent: Parent = new Parent();
    const {name, age, grandParent} = createParentDtoDetails
    newParent.name = name;
    newParent.age = age;
    const id: number = grandParent?.id

    // if GP was not provided - create new P without relation to GP
    if(!grandParent) {
      const createdParentWithGP = this.parentRepo.create({
        ...newParent
      });
      return await this.parentRepo.save(createdParentWithGP);
    }

    const existingGP = await this.grandParentRepo.findOneBy({id})
    
    // if provided GP was not found in DB
    if(!existingGP) { 
      throw new NotFoundException('Grandparent is not found')
    }

    newParent.grandParent = existingGP;

    const createdParent = this.parentRepo.create({
      ...newParent,
      grandParent
    });
    return await this.parentRepo.save(createdParent);

  }

}
