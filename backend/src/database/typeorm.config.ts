import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from '../student/student.entity';

import * as dotenv from 'dotenv';

dotenv.config();

console.log('DB_HOST', process.env.MYSQL_HOST);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD, 
  database: process.env.MYSQL_NAME,
  entities: [Student],
  synchronize: true,
};
