import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaVida } from './hoja-vida';

describe('HojaVida', () => {
  let component: HojaVida;
  let fixture: ComponentFixture<HojaVida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HojaVida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HojaVida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
