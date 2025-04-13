import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Student } from "./student.entity";

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ) {}

    // 1. Tìm theo số báo danh
    async findByRegistrationNumber(registrationNumber: string) {
        return this.studentRepository.findOne({ where: { registrationNumber } });
    }

    // 2. báo cáo
    async getReportSubjectsStats() {
        console.log('getReportSubjectsStats')
        const result = {}
        const students = await this.studentRepository.find();
        const subjects = [
            'math',
            'literature',
            'foreignLanguage',
            'physics',
            'chemistry',
            'biology',
            'history',
            'geography',
            'civicEducation'
        ];

        for (const subject of subjects) {
            result[subject] = {
              level1: 0,
              level2: 0,
              level3: 0,
              level4: 0,
            };
            console.log(subject, result[subject])

            for (const student of students) {
                const score = student[subject];
                
                if (score >= 8) result[subject].level1++;
                else if (score >= 6) result[subject].level2++;
                else if (score >= 4) result[subject].level3++;
                else if (score >= 0 && score < 4) result[subject].level4++;
            }
            console.log(subject, result[subject])
        }

        return result;
    }

    // 3. Lấy top 10 học sinh khối A cao nhất
    async getTop10StudentsGroupA() {
        const students = await this.studentRepository.find();

        const studentsGroupA = students.map(student => ({
            ...student,
            totalScore: (student.math ?? 0) + (student.physics ?? 0) + (student.chemistry ?? 0),
        }))
        .sort((a, b) => b.totalScore - a.totalScore)
        .slice(0, 10);

        return studentsGroupA;
    }
}