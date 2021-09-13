import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { StudentEntity } from '../models/student.entity';
import { Student } from '../models/student.interface';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentEntity)
        private readonly studentRepository: Repository<StudentEntity>
    ){}

    createStudent(student: Student): Observable<Student>{
        return from(this.studentRepository.save(student));
    }

    findAll(): Observable<Student[]>{
       return from(this.studentRepository.find());
    }
}
