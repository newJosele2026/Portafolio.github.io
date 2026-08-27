import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comunicacion } from './comunicacion';

describe('Comunicacion', () => {
  let component: Comunicacion;
  let fixture: ComponentFixture<Comunicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comunicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comunicacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
