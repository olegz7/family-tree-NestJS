import { Module } from '@nestjs/common';
import { FamilyMemberController } from './grand-parents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrandParent } from '../shared/entities/grandParent';
import { GrandParentsService } from './grand-parents.service';

@Module({
  imports: [TypeOrmModule.forFeature([GrandParent])],
  controllers: [FamilyMemberController],
  providers: [GrandParentsService]
})
export class FamilyMemberModule {}
