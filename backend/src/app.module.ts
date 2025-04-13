import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { typeOrmConfig } from './database/typeorm.config';
import { SeederModule } from './seeders/seeder.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    StudentModule,
    SeederModule,
  ],
})

export class AppModule {}
