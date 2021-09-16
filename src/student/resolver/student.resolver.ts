import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { createStudentInput } from "../dto/create-student-input";
//import { Student } from "../models/student.interface";
import { StudentEntity } from "../models/student.entity";

import { StudentService } from "../services/student.service";

@Resolver()
export class StudentResolver {
 /**
  *
  */
 constructor(private studentService: StudentService) { }

 @Query(returns => [StudentEntity])
 students(): Observable<StudentEntity[]>{
     return this.studentService.findAll();
 }

 @Mutation(returns => StudentEntity)
 createStudent(@Args('createStudentInput') createStudentInput: createStudentInput): Promise<StudentEntity>{
     return this.studentService.createStudent(createStudentInput);
 }
}