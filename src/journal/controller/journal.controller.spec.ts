import { Test, TestingModule } from '@nestjs/testing';
import { JournalController } from './journal.controller';
import { JournalService } from '../service/journal.service';

describe('JournalController', () => {
  let controller: JournalController;
  let service: JournalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JournalController],
      providers: [
        {
          provide: JournalService,
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

    controller = module.get<JournalController>(JournalController);
    service = module.get<JournalService>(JournalService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a journal', () => {
      const createDto = { name: 'Test Journal', issn: '1234-5678' };
      const expectedResult = { 
        journal_id: BigInt(1), 
        name: 'Test Journal', 
        issn: '1234-5678',
        publisher: null,
        impact_factor: null,
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
    it('should return an array of journals', () => {
      const expectedResult = [
        { 
          journal_id: BigInt(1), 
          name: 'Journal 1',
          publisher: null,
          issn: null,
          impact_factor: null,
          cno: null,
          user_no: null,
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
        { 
          journal_id: BigInt(2), 
          name: 'Journal 2',
          publisher: null,
          issn: null,
          impact_factor: null,
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
    it('should return a single journal', () => {
      const expectedResult = { 
        journal_id: BigInt(1), 
        name: 'Test Journal',
        publisher: null,
        issn: null,
        impact_factor: null,
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
    it('should update a journal', () => {
      const updateDto = { name: 'Updated Journal' };
      const expectedResult = { 
        journal_id: BigInt(1), 
        name: 'Updated Journal',
        publisher: null,
        issn: null,
        impact_factor: null,
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
    it('should remove a journal', () => {
      const expectedResult = { 
        journal_id: BigInt(1), 
        name: 'Deleted Journal',
        publisher: null,
        issn: null,
        impact_factor: null,
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