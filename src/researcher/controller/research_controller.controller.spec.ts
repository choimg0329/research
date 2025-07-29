import { Test, TestingModule } from '@nestjs/testing';
import { ResearchControllerController } from './research_controller.controller';
import { ResearchServiceService } from '../service/research_service.service';
import { CreateResearcherDto } from '../dto/create-researcher.dto';

describe('ResearchControllerController', () => {
  let controller: ResearchControllerController;
  let service: ResearchServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResearchControllerController],
      providers: [
        {
          provide: ResearchServiceService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ResearchControllerController>(ResearchControllerController);
    service = module.get<ResearchServiceService>(ResearchServiceService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new researcher', async () => {
      const createResearcherDto: CreateResearcherDto = {
        name: 'John Doe',
        affiliation: 'University',
        email: 'john@example.com',
        user_no: 12345,
        cno: 1,
      };

      const expectedResult = {
        code: 201,
        message: '연구자 등록 완료',
        data: {
          researcher_id: BigInt(1),
          name: 'John Doe',
          affiliation: 'University',
          email: 'john@example.com',
          user_no: BigInt(12345),
          cno: BigInt(1),
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
      };

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      const result = await controller.create(createResearcherDto);

      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createResearcherDto);
    });

    it('should handle duplicate user_no', async () => {
      const createResearcherDto: CreateResearcherDto = {
        name: 'John Doe',
        affiliation: 'University',
        email: 'john@example.com',
        user_no: 12345,
        cno: 1,
      };

      const expectedResult = {
        code: 200,
        message: '이미 등록된 사용자입니다.',
        data: {
          researcher_id: BigInt(1),
          name: 'John Doe',
          affiliation: 'University',
          email: 'john@example.com',
          user_no: BigInt(12345),
          cno: BigInt(1),
          insert_timestamp: new Date(),
          update_timestamp: new Date(),
          is_deleted: false
        },
      };

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      const result = await controller.create(createResearcherDto);

      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createResearcherDto);
    });
  });
});
