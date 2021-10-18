import { Test, TestingModule } from '@nestjs/testing';
import { NhlapiService } from './nhlapi.service';

describe('NhlapiService', () => {
  let service: NhlapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NhlapiService],
    }).compile();

    service = module.get<NhlapiService>(NhlapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
