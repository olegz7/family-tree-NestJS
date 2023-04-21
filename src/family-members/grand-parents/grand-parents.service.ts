import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrandParentDto } from '../shared/DTO/grand-parent.dto';
import { FamilyService } from '../shared/services/family.service';
import { GrandParent } from '../shared/entities/grandParent';

@Injectable()
export class GrandParentsService extends FamilyService {

  constructor(
    @InjectRepository(GrandParent) private readonly grandParentRepo: Repository<GrandParent>
  ) {
    super(grandParentRepo)
  }

  async createGrandParent(grandParentDto: GrandParentDto) {
    
    const grandParent: GrandParent = new GrandParent();
    const {name, age} = grandParentDto
    grandParent.name = name;
    grandParent.age = age;

    this.grandParentRepo.create(grandParent);
    return await this.grandParentRepo.save(grandParent);
  }

}
