import { Module } from '@nestjs/common';
import { StudentService } from './services/student.service';
import { StudentController } from './controllers/student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './models/student.entity';
import { StudentResolver } from './resolver/student.resolver';

@Module({
  imports:[
    TypeOrmModule.forFeature([StudentEntity])
  ],
  providers: [StudentService, StudentResolver],
  controllers: [StudentController]
})
export class StudentModule {}
