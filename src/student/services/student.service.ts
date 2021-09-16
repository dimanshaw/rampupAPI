import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { createStudentInput } from '../dto/create-student-input';
import { StudentEntity } from '../models/student.entity';
import { Student } from '../models/student.interface';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentEntity)
        private readonly studentRepository: Repository<StudentEntity>
    ){}

    createStudent(createStudentInput: createStudentInput): Promise<StudentEntity>{
       const newStudent = this.studentRepository.create(createStudentInput);
        return (this.studentRepository.save(newStudent));
    }


    findAll(): Observable<StudentEntity[]>{
        console.log("Find All Studnets")
       return from(this.studentRepository.find()); 
    }
}
