import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaComponent } from './dieta.component';

describe('DietaComponent', () => {
  let component: DietaComponent;
  let fixture: ComponentFixture<DietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
