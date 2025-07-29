import { Test, TestingModule } from '@nestjs/testing';
import { IpcController } from './ipc.controller';
import { IpcService } from '../service/ipc.service';

describe('IpcController', () => {
  let controller: IpcController;
  let service: IpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpcController],
      providers: [
        {
          provide: IpcService,
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

    controller = module.get<IpcController>(IpcController);
    service = module.get<IpcService>(IpcService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an ipc', () => {
      const createDto = { ipc_code: 'A01B', description: 'Test IPC Code' };
      const expectedResult = { 
        ipc_id: BigInt(1), 
        ipc_code: 'A01B', 
        description: 'Test IPC Code',
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
    it('should return an array of ipc codes', () => {
      const expectedResult = [
        { 
          ipc_id: BigInt(1), 
          ipc_code: 'A01B', 
          description: 'IPC 1',
          cno: null,
          user_no: null,
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
        { 
          ipc_id: BigInt(2), 
          ipc_code: 'A01C', 
          description: 'IPC 2',
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
    it('should return a single ipc', () => {
      const expectedResult = { 
        ipc_id: BigInt(1), 
        ipc_code: 'A01B', 
        description: 'Test IPC',
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
    it('should update an ipc', () => {
      const updateDto = { description: 'Updated IPC Description' };
      const expectedResult = { 
        ipc_id: BigInt(1), 
        ipc_code: 'A01B', 
        description: 'Updated IPC Description',
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
    it('should remove an ipc', () => {
      const expectedResult = { 
        ipc_id: BigInt(1), 
        ipc_code: 'A01B', 
        description: 'Deleted IPC',
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