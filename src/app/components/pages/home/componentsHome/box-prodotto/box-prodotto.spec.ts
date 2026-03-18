import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProdotto } from './box-prodotto';

describe('BoxProdotto', () => {
  let component: BoxProdotto;
  let fixture: ComponentFixture<BoxProdotto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxProdotto],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxProdotto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
