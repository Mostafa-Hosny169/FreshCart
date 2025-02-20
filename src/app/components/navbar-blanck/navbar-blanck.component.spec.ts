import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBlanckComponent } from './navbar-blanck.component';

describe('NavbarBlanckComponent', () => {
  let component: NavbarBlanckComponent;
  let fixture: ComponentFixture<NavbarBlanckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarBlanckComponent]
    });
    fixture = TestBed.createComponent(NavbarBlanckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
