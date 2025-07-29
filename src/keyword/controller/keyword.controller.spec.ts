import { Test, TestingModule } from '@nestjs/testing';
import { KeywordController } from './keyword.controller';
import { KeywordService } from '../service/keyword.service';

describe('KeywordController', () => {
  let controller: KeywordController;
  let service: KeywordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeywordController],
      providers: [
        {
          provide: KeywordService,
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

    controller = module.get<KeywordController>(KeywordController);
    service = module.get<KeywordService>(KeywordService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a keyword', () => {
      const createDto = { keyword_name: 'Test Keyword', description: 'Technology' };
      const expectedResult = { 
        keyword_id: BigInt(1), 
        keyword_name: 'Test Keyword', 
        description: 'Technology',
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
    it('should return an array of keywords', () => {
      const expectedResult = [
        { 
          keyword_id: BigInt(1), 
          keyword_name: 'Keyword 1',
          description: null,
          cno: null,
          user_no: null,
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
        { 
          keyword_id: BigInt(2), 
          keyword_name: 'Keyword 2',
          description: null,
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
    it('should return a single keyword', () => {
      const expectedResult = { 
        keyword_id: BigInt(1), 
        keyword_name: 'Test Keyword',
        description: null,
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
    it('should update a keyword', () => {
      const updateDto = { keyword_name: 'Updated Keyword' };
      const expectedResult = { 
        keyword_id: BigInt(1), 
        keyword_name: 'Updated Keyword',
        description: null,
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
    it('should remove a keyword', () => {
      const expectedResult = { 
        keyword_id: BigInt(1), 
        keyword_name: 'Deleted Keyword',
        description: null,
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