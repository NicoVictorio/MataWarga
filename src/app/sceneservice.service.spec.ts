import { TestBed } from '@angular/core/testing';

import { SceneserviceService } from './sceneservice.service';

describe('SceneserviceService', () => {
  let service: SceneserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SceneserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
