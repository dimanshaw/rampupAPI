import { Module } from '@nestjs/common';
import { StudentService } from './services/student.service';
import { StudentController } from './controllers/student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './models/student.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([StudentEntity])
  ],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
