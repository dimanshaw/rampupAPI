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

    // createStudentFromFile(createStudentInput: createStudentInput): Promise<StudentEntity>{
    //    const newStudent = this.studentRepository.create(createStudentInput);
    //     return (this.studentRepository.save(newStudent));
    // }

    // updateStudenta(student): Observable<UpdateResult>{
    //     console.log("Student to update ", student);
    //     return from(this.studentRepository.save(student));
    // }




    // async findAll(): Promise<StudentEntity[]>{
    //     return this.studentRepository.find();
    // }




    // #####################

    updateStudent(createStudentInput: createStudentInput): Promise<UpdateResult>{
        const newStudent = this.studentRepository.create(createStudentInput);
        console.log("Update Student ", createStudentInput.id);
        return this.studentRepository.update(createStudentInput.id, newStudent);
    }

    createStudent(createStudentInput: createStudentInput): Promise<StudentEntity>{
        const newStudent = this.studentRepository.create(createStudentInput);
        return this.studentRepository.save(newStudent);

        
        //post graphile - bulk update - to db
        
    }


    findAll(isDeleted: boolean = true): Promise<StudentEntity[]>{
        console.log("Find All Studnets")
        
       return (this.studentRepository.find({isDeleted: false})); 
    }
}


