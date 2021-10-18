import { Test, TestingModule } from '@nestjs/testing';
import { NhlapiController } from './nhlapi.controller';

describe('Nhlapi Controller', () => {
  let controller: NhlapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NhlapiController],
    }).compile();

    controller = module.get<NhlapiController>(NhlapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
