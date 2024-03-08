import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthBoxComponent } from './strength-box.component';

describe('StrengthBoxComponent', () => {
  let component: StrengthBoxComponent;
  let fixture: ComponentFixture<StrengthBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrengthBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
