

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeederModule } from './seeder.module';
import { StudentSeeder } from './student.seeder';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.select(SeederModule).get(StudentSeeder, { strict: false });
  await seeder.seed();
  await app.close();
}

run();
