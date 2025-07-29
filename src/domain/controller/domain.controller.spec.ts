import { Test, TestingModule } from '@nestjs/testing';
import { DomainController } from './domain.controller';
import { DomainService } from '../service/domain.service';

describe('DomainController', () => {
  let controller: DomainController;
  let service: DomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DomainController],
      providers: [
        {
          provide: DomainService,
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

    controller = module.get<DomainController>(DomainController);
    service = module.get<DomainService>(DomainService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a domain', () => {
      const createDto = { name: 'Test Domain', description: 'Test Description' };
      const expectedResult = { 
        domain_id: BigInt(1), 
        name: 'Test Domain', 
        description: 'Test Description',
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
    it('should return an array of domains', () => {
      const expectedResult = [
        { 
          domain_id: BigInt(1), 
          name: 'Domain 1',
          description: null,
          cno: null,
          user_no: null,
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
        { 
          domain_id: BigInt(2), 
          name: 'Domain 2',
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
    it('should return a single domain', () => {
      const expectedResult = { 
        domain_id: BigInt(1), 
        name: 'Test Domain',
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
    it('should update a domain', () => {
      const updateDto = { name: 'Updated Domain' };
      const expectedResult = { 
        domain_id: BigInt(1), 
        name: 'Updated Domain',
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
    it('should remove a domain', () => {
      const expectedResult = { 
        domain_id: BigInt(1), 
        name: 'Deleted Domain',
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