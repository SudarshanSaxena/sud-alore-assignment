import { TestBed } from '@angular/core/testing';

import { SegmentTableService } from './segment-table.service';

describe('SegmentTableService', () => {
  let service: SegmentTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegmentTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
