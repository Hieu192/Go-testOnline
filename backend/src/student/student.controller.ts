import { Controller, Get, InternalServerErrorException, Param } from "@nestjs/common";
import { StudentService } from "./student.service";


@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/report')
  getStudentTest() {
    console.log('getStudentTest')
    return this.studentService.getReportSubjectsStats();
  }

  @Get('/top-10/groupA')
  getTop10GroupA() {
    return this.studentService.getTop10StudentsGroupA();
  }

  @Get('/:registrationNumber')
  getStudentBySBD(@Param('registrationNumber') registrationNumber: string) {
    return this.studentService.findByRegistrationNumber(registrationNumber);
  }


}