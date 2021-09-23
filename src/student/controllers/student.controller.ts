import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { createStudentInput } from '../dto/create-student-input';
import { StudentEntity } from '../models/student.entity';
import { Student } from '../models/student.interface';
import { StudentService } from '../services/student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService){}
    @Post()
    createStudent(@Body() createStudentInput: createStudentInput): Promise<StudentEntity>{
        console.log("Controller create studetn ", createStudentInput)
        return this.studentService.createStudent(createStudentInput);
    }

    // @Post('getAllStudents')
    // getAllStudents(): Observable<Student[]>{
    //     return this.studentService.findAll();
    // }

    // @Post('updateStudent')
    // updateStudent(@Body() studentDetails: StudentEntity): Observable<UpdateResult>{

    //     console.log("Updating Student ", studentDetails)
    //     return (this.studentService.updateStudent(studentDetails));
    // }

    // @Get('findAll')
    // findAll(): Observable<Student[]>{
    //     return this.studentService.findAll();
    // }
}
 