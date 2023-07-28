import { Test, TestingModule } from '@nestjs/testing';
import { MBusinessDetailsService } from './m-business-details.service';

describe('MBusinessDetailsService', () => {
  let service: MBusinessDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MBusinessDetailsService],
    }).compile();

    service = module.get<MBusinessDetailsService>(MBusinessDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
