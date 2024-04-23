import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaDetailComponent } from './dieta-detail.component';

describe('DietaDetailComponent', () => {
  let component: DietaDetailComponent;
  let fixture: ComponentFixture<DietaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietaDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DietaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
