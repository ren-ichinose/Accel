import { Test, TestingModule } from '@nestjs/testing';
import { MBusinessDetailController } from './m-business-detail.controller';

describe('MBusinessDetailController', () => {
  let controller: MBusinessDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MBusinessDetailController],
    }).compile();

    controller = module.get<MBusinessDetailController>(
      MBusinessDetailController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
