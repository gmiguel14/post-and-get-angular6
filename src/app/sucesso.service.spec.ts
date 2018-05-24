import { TestBed, inject } from '@angular/core/testing';

import { SucessoService } from './sucesso.service';

describe('SucessoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SucessoService]
    });
  });

  it('should be created', inject([SucessoService], (service: SucessoService) => {
    expect(service).toBeTruthy();
  }));
});
