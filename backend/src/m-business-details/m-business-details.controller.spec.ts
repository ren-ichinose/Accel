import { Test, TestingModule } from '@nestjs/testing';
import { MBusinessDetailsController } from './m-business-details.controller';

describe('MBusinessDetailsController', () => {
  let controller: MBusinessDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MBusinessDetailsController],
    }).compile();

    controller = module.get<MBusinessDetailsController>(
      MBusinessDetailsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
