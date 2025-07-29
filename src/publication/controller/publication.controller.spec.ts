import { Test, TestingModule } from '@nestjs/testing';
import { PublicationController } from './publication.controller';
import { PublicationService } from '../service/publication.service';

describe('PublicationController', () => {
  let controller: PublicationController;
  let service: PublicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicationController],
      providers: [
        {
          provide: PublicationService,
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

    controller = module.get<PublicationController>(PublicationController);
    service = module.get<PublicationService>(PublicationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a publication', () => {
      const createDto = { title: 'Test Publication', abstract: 'Test Content' };
      const expectedResult = { 
        publication_id: BigInt(1), 
        title: 'Test Publication', 
        abstract: 'Test Content',
        publication_date: null,
        journal_id: null,
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
    it('should return an array of publications', () => {
      const expectedResult = [
        { 
          publication_id: BigInt(1), 
          title: 'Publication 1',
          abstract: null,
          publication_date: null,
          journal_id: null,
          cno: null,
          user_no: null,
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
        { 
          publication_id: BigInt(2), 
          title: 'Publication 2',
          abstract: null,
          publication_date: null,
          journal_id: null,
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
    it('should return a single publication', () => {
      const expectedResult = { 
        publication_id: BigInt(1), 
        title: 'Test Publication',
        abstract: null,
        publication_date: null,
        journal_id: null,
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
    it('should update a publication', () => {
      const updateDto = { title: 'Updated Publication' };
      const expectedResult = { 
        publication_id: BigInt(1), 
        title: 'Updated Publication',
        abstract: null,
        publication_date: null,
        journal_id: null,
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
    it('should remove a publication', () => {
      const expectedResult = { 
        publication_id: BigInt(1), 
        title: 'Deleted Publication',
        abstract: null,
        publication_date: null,
        journal_id: null,
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