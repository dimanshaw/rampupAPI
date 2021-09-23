import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { createStudentInput } from '../dto/create-student-input';
//import { Student } from "../models/student.interface";
import { StudentEntity } from '../models/student.entity';

import { StudentService } from '../services/student.service';

@Resolver((of) => StudentEntity)
export class StudentResolver {
  /**
   *
   */
  constructor(private studentService: StudentService) {}

  @Query((returns) => [StudentEntity])
  students(): Promise<StudentEntity[]> {
    return StudentEntity.find();
  }

  @Query(() => String)
  hello() {
    return 'hi';
  }

  @Mutation((returns) => StudentEntity)
  async createStudent(
    @Args('createStudentInput') createStudentInput: createStudentInput,
  ) {
    const student = await StudentEntity.create(createStudentInput).save();
    return student;
  }

  @Mutation(() => Boolean)
  async updateStudent(
      @Args('id') id: number,
      @Args('input') input: createStudentInput
  ){
    await StudentEntity.update({id}, input);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteStudent(@Args('id') id: number) {
    await StudentEntity.delete({ id });
    return true;
  }
}
