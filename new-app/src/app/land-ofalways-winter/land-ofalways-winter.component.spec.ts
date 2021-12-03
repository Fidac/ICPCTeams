import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOFAlwaysWinterComponent } from './land-ofalways-winter.component';

describe('LandOFAlwaysWinterComponent', () => {
  let component: LandOFAlwaysWinterComponent;
  let fixture: ComponentFixture<LandOFAlwaysWinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandOFAlwaysWinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandOFAlwaysWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
