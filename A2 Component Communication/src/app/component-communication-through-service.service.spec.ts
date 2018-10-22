import { TestBed } from '@angular/core/testing';

import { ComponentCommunicationThroughServiceService } from './component-communication-through-service.service';

describe('ComponentCommunicationThroughServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentCommunicationThroughServiceService = TestBed.get(ComponentCommunicationThroughServiceService);
    expect(service).toBeTruthy();
  });
});
