import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FamilyMemberModule } from './family-members/grand-parents/grand-parents.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ParentsModule } from './family-members/parents/parents.module';


const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestjs',
  autoLoadEntities: true,
  synchronize: false,
  // migrationsRun: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    FamilyMemberModule,
    ParentsModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
