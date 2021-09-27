import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { createStudentInput } from '../dto/create-student-input';
import { StudentEntity } from '../models/student.entity';
import { request, gql } from 'graphql-request';
import axios from 'axios';

let studentListfromExcel;
const doubleQuote = [
    {
      name: "zzzz",
      email: "aaaaa@gmail.com",
      dateofbirth: "1993-07-28",
      age: 28
    }
  ]

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  updateStudent(createStudentInput: createStudentInput): Promise<UpdateResult> {
    const newStudent = this.studentRepository.create(createStudentInput);
    console.log('Update Student ', createStudentInput.id);
    return this.studentRepository.update(createStudentInput.id, newStudent);
  }

  async createStudent(
    createStudentInput: createStudentInput,
  ): Promise<StudentEntity> {
    const newStudent = this.studentRepository.create(createStudentInput);

    studentListfromExcel = createStudentInput;
    const query = gql`
    mutation studentbulkinsert($std: StudentbulkinsertInput!) {
        studentbulkinsert(input: $std) {
          clientMutationId
          
        }
      }`;

    console.log('query ', query);
    console.log('object ', createStudentInput);

    await axios.post('http://localhost:5000/graphql', {
      query: query,
      variables: {
        std: {
          std: studentListfromExcel,
        },
      },
    });

    return; //this.studentRepository.save(newStudent);

    //post graphile - bulk update - to db
  }

  findAll(isDeleted: boolean = true): Promise<StudentEntity[]> {
    console.log('Find All Studnets');

    return this.studentRepository.find({ isDeleted: false });
  }
}
