import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
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

    @Post('getAllStudents')
    getAllStudents(): Observable<Student[]>{
        return this.studentService.findAll();
    }

    @Get('findAll')
    findAll(): Observable<Student[]>{
        return this.studentService.findAll();
    }
}
 