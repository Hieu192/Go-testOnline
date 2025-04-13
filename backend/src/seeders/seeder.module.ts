import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../student/student.entity';
import { StudentSeeder } from './student.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentSeeder],
  exports: [StudentSeeder],
})
export class SeederModule {}
