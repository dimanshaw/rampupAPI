import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;

  const mockStudentService = {
    updateStudent: jest.fn((dto) => {
      return {
        updateStudent: true,
      };
    }),
    createStudent: jest.fn((dto => {
      return {
        createStudent: true,
      }
    }))
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService],
    })
      .overrideProvider(StudentService)
      .useValue(mockStudentService)
      .compile();

    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should delete a student from the database (delete and update)', () => {
    expect(
      service.updateStudent({
        id: 423,
        isDeleted: true,
        name: 'dima',
        age: 30,
        dateOfBirth: new Date('2020-02-02'),
        createdAt: new Date('2020-02-02'),
        email: 'dima',
      }),
    ).toEqual({
      updateStudent: true,
    });
  });

  it('should create a student', () => {
    expect(
      service.createStudent({
        name: 'dimansha',
        id: 503,
        email: 'dima@gamil.com',
        age: 30,
        dateOfBirth: new Date('2020-02-02'),
        createdAt: new Date('2020-02-02'),
        isDeleted: false,
      }),
    ).toEqual({ 
      createStudent: true 
    });
  });
});
