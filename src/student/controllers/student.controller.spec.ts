import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from '../services/student.service';
import { Repository, UpdateResult } from 'typeorm';
import { StudentEntity } from '../models/student.entity';

describe('StudentController', () => {
  let controller: StudentController;
  let service: StudentService;
  let studentRepository: Repository<StudentEntity>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
    }).compile();

    controller = module.get<StudentController>(StudentController);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
});
