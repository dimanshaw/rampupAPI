import { Args, Field, InputType, Mutation, Query, Resolver } from '@nestjs/graphql';
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
  students(
      @Args('isDeleted') isDeleted: boolean
  ): Promise<StudentEntity[]> {
    //StudentEntity.find();
    return this.studentService.findAll(isDeleted);
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
      @Args('input') input: createStudentInput
  ){
    await this.studentService.updateStudent(input);
    return true;
  }

  @Mutation(() => Number)
  async deleteStudentPermanant(@Args('id') id: number) {
    const student = await StudentEntity.delete({ id });

    return student.affected;
  }
}
