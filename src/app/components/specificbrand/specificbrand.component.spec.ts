import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificbrandComponent } from './specificbrand.component';

describe('SpecificbrandComponent', () => {
  let component: SpecificbrandComponent;
  let fixture: ComponentFixture<SpecificbrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificbrandComponent]
    });
    fixture = TestBed.createComponent(SpecificbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
