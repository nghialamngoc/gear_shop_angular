import { TestBed } from '@angular/core/testing';

import { SubcategorycolumnService } from './subcategorycolumn.service';

describe('SubcategorycolumnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubcategorycolumnService = TestBed.get(SubcategorycolumnService);
    expect(service).toBeTruthy();
  });
});
