import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthOfTheWallComponent } from './north-of-the-wall.component';

describe('NorthOfTheWallComponent', () => {
  let component: NorthOfTheWallComponent;
  let fixture: ComponentFixture<NorthOfTheWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthOfTheWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthOfTheWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
