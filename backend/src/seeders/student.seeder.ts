
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../student/student.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';

@Injectable()
export class StudentSeeder {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  async seed(): Promise<void> {
    const csvFilePath = path.join(__dirname, 'data', 'diem_thi_thpt_2024.csv');
    const BATCH_SIZE  = 1000;
    let batch: Student[] = [];
    let totalSeeded = 0;


    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(csvFilePath).pipe(csv());

      stream
      .on('data', async (row) => {
        try {
          const parseNumber = (value: string): number | null => {
              if (!value?.trim()) {
                return null;
              }
              return parseFloat(value);
            };

          const student = this.studentRepo.create({
            math: parseNumber(row.toan),
            registrationNumber: row.sbd,
            literature: parseNumber(row.ngu_van),
            foreignLanguage: parseNumber(row.ngoai_ngu),
            physics: parseNumber(row.vat_li),
            chemistry: parseNumber(row.hoa_hoc),
            biology: parseNumber(row.sinh_hoc),
            history: parseNumber(row.lich_su),
            geography: parseNumber(row.dia_li),
            civicEducation: parseNumber(row.gdcd),
            foreignLanguageCode: row.ma_ngoai_ngu,
          });
          batch.push(student);

          if (batch.length >= BATCH_SIZE) {
            stream.pause();
            await this.studentRepo.save(batch);
            totalSeeded += batch.length;
            console.log(`Seeded ${totalSeeded} students`);
            batch = [];
            stream.resume();
          }
        } catch (error) {
          console.error('Error processing row:', row, error);
        }
      })
      .on('end', async () => {
        if (batch.length > 0) {
          await this.studentRepo.save(batch);
          totalSeeded += batch.length;
          console.log(`Seeded ${totalSeeded} students`);
        }
        console.log(`✅ Done seeding.`);
        resolve();
      })
      .on('error', reject);
    });
  }
}
