import { Test, TestingModule } from '@nestjs/testing';
import { MBusinessDetailService } from './m-business-detail.service';

describe('MBusinessDetailService', () => {
  let service: MBusinessDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MBusinessDetailService],
    }).compile();

    service = module.get<MBusinessDetailService>(MBusinessDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
