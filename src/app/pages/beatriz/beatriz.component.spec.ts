import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatrizComponent } from './beatriz.component';

describe('BeatrizComponent', () => {
  let component: BeatrizComponent;
  let fixture: ComponentFixture<BeatrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatrizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
