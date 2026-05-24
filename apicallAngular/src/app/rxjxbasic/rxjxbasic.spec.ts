import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjxbasic } from './rxjxbasic';

describe('Rxjxbasic', () => {
  let component: Rxjxbasic;
  let fixture: ComponentFixture<Rxjxbasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjxbasic],
    }).compileComponents();

    fixture = TestBed.createComponent(Rxjxbasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
