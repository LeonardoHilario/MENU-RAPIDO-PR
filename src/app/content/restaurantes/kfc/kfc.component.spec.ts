import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KFCComponent } from './kfc.component';

describe('KFCComponent', () => {
  let component: KFCComponent;
  let fixture: ComponentFixture<KFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KFCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
