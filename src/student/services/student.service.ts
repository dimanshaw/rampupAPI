import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
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

    updateStudent(student): Observable<UpdateResult>{
        console.log("Student to update ", student);
        return from(this.studentRepository.save(student));
    }


    findAll(@Query('isDeleted') isDeleted: boolean = true): Observable<StudentEntity[]>{
        console.log("Find All Studnets")
        
       return from(this.studentRepository.find({isDeleted: false})); 
    }
}
