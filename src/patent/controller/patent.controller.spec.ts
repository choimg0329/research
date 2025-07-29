import { Test, TestingModule } from '@nestjs/testing';
import { PatentController } from './patent.controller';
import { PatentService } from '../service/patent.service';

describe('PatentController', () => {
  let controller: PatentController;
  let service: PatentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatentController],
      providers: [
        {
          provide: PatentService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PatentController>(PatentController);
    service = module.get<PatentService>(PatentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a patent', () => {
      const createDto = { title: 'Test Patent', summary: 'Test Description' };
      const expectedResult = { 
        patent_id: BigInt(1), 
        title: 'Test Patent', 
        summary: 'Test Description',
        application_number: null,
        registration_number: null,
        publication_number: null,
        country: null,
        applicant_name: null,
        application_title: null,
        applicant: null,
        application_date: null,
        registration_date: null,
        publication_date: null,
        cno: null,
        user_no: null,
        insert_timestamp: new Date(),
        update_timestamp: new Date(),
        is_deleted: false
      };
      
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);
      
      expect(controller.create(createDto)).resolves.toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of patents', () => {
      const expectedResult = [
        { 
          patent_id: BigInt(1), 
          title: 'Patent 1',
          summary: null,
          application_number: null,
          registration_number: null,
          publication_number: null,
          country: null,
          applicant_name: null,
          application_title: null,
          applicant: null,
          application_date: null,
          registration_date: null,
          publication_date: null,
          cno: null,
          user_no: null,
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
        { 
          patent_id: BigInt(2), 
          title: 'Patent 2',
          summary: null,
          application_number: null,
          registration_number: null,
          publication_number: null,
          country: null,
          applicant_name: null,
          application_title: null,
          applicant: null,
          application_date: null,
          registration_date: null,
          publication_date: null,
          cno: null,
          user_no: null,
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
      ];
      
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);
      
      expect(controller.findAll()).resolves.toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single patent', () => {
      const expectedResult = { 
        patent_id: BigInt(1), 
        title: 'Test Patent',
        summary: null,
        application_number: null,
        registration_number: null,
        publication_number: null,
        country: null,
        applicant_name: null,
        application_title: null,
        applicant: null,
        application_date: null,
        registration_date: null,
        publication_date: null,
        cno: null,
        user_no: null,
        insert_timestamp: new Date(),
        update_timestamp: new Date(),
        is_deleted: false
      };
      
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);
      
      expect(controller.findOne('1')).resolves.toEqual(expectedResult);
    });
  });

  describe('update', () => {
    it('should update a patent', () => {
      const updateDto = { title: 'Updated Patent' };
      const expectedResult = { 
        patent_id: BigInt(1), 
        title: 'Updated Patent',
        summary: null,
        application_number: null,
        registration_number: null,
        publication_number: null,
        country: null,
        applicant_name: null,
        application_title: null,
        applicant: null,
        application_date: null,
        registration_date: null,
        publication_date: null,
        cno: null,
        user_no: null,
        insert_timestamp: new Date(),
        update_timestamp: new Date(),
        is_deleted: false
      };
      
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);
      
      expect(controller.update('1', updateDto)).resolves.toEqual(expectedResult);
    });
  });

  describe('remove', () => {
    it('should remove a patent', () => {
      const expectedResult = { 
        patent_id: BigInt(1), 
        title: 'Deleted Patent',
        summary: null,
        application_number: null,
        registration_number: null,
        publication_number: null,
        country: null,
        applicant_name: null,
        application_title: null,
        applicant: null,
        application_date: null,
        registration_date: null,
        publication_date: null,
        cno: null,
        user_no: null,
        insert_timestamp: new Date(),
        update_timestamp: new Date(),
        is_deleted: false
      };
      
      jest.spyOn(service, 'remove').mockResolvedValue(expectedResult);
      
      expect(controller.remove('1')).resolves.toEqual(expectedResult);
    });
  });
}); 