import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passvalue } from './passvalue';

describe('Passvalue', () => {
  let component: Passvalue;
  let fixture: ComponentFixture<Passvalue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passvalue],
    }).compileComponents();

    fixture = TestBed.createComponent(Passvalue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
