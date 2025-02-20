import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelatilsproductComponent } from './delatilsproduct.component';

describe('DelatilsproductComponent', () => {
  let component: DelatilsproductComponent;
  let fixture: ComponentFixture<DelatilsproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelatilsproductComponent]
    });
    fixture = TestBed.createComponent(DelatilsproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
