import { Test, TestingModule } from '@nestjs/testing';
import { MNoteController } from './m-note.controller';

describe('MNoteController', () => {
  let controller: MNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MNoteController],
    }).compile();

    controller = module.get<MNoteController>(MNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
