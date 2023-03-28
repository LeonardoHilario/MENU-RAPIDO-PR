import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerkingComponent } from './burgerking.component';

describe('BurgerkingComponent', () => {
  let component: BurgerkingComponent;
  let fixture: ComponentFixture<BurgerkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
