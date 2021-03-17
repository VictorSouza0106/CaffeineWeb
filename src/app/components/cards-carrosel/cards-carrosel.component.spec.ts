import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardsCarroselComponent } from './cards-carrosel.component';

describe('CardsCarroselComponent', () => {
  let component: CardsCarroselComponent;
  let fixture: ComponentFixture<CardsCarroselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCarroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCarroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
