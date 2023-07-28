import { Test, TestingModule } from '@nestjs/testing';
import { MNoteService } from './m-note.service';

describe('MNoteService', () => {
  let service: MNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MNoteService],
    }).compile();

    service = module.get<MNoteService>(MNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
