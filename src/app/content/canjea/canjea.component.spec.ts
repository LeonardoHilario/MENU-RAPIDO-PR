import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjeaComponent } from './canjea.component';

describe('CanjeaComponent', () => {
  let component: CanjeaComponent;
  let fixture: ComponentFixture<CanjeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanjeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanjeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
