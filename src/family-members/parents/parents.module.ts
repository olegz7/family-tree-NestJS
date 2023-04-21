import { Module } from '@nestjs/common';
import { ParentsController } from './parents.controller';
import { ParentsService } from './parents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from '../shared/entities/parent';
import { GrandParent } from '../shared/entities/grandParent';

@Module({
  imports: [TypeOrmModule.forFeature([Parent, GrandParent])],
  controllers: [ParentsController],
  providers: [ParentsService]
})
export class ParentsModule {}
