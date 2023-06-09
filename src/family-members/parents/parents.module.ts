import { Module } from '@nestjs/common';
import { ParentsController } from './parents.controller';
import { ParentsService } from './parents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from '../shared/entities/parent';
import { GrandParent } from '../shared/entities/grandParent';
import { Child } from '../shared/entities/child';
import { GrandChild } from '../shared/entities/grandChild';

@Module({
  imports: [TypeOrmModule.forFeature([Parent, GrandParent, Child, GrandChild])],
  controllers: [ParentsController],
  providers: [ParentsService]
})
export class ParentsModule {}
