import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterFellComponent } from './winter-fell.component';

describe('WinterFellComponent', () => {
  let component: WinterFellComponent;
  let fixture: ComponentFixture<WinterFellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterFellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterFellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
