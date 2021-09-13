import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Student } from '../models/student.interface';
import { StudentService } from '../services/student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService){}
    @Post()
    createStudent(@Body() student: Student): Observable<Student>{
        return this.studentService.createStudent(student);
    }

    @Get('findAll')
    findAll(): Observable<Student[]>{
        return this.studentService.findAll();
    }
}
 