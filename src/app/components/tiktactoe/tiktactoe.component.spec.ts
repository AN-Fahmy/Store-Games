import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktactoeComponent } from './tiktactoe.component';

describe('TiktactoeComponent', () => {
  let component: TiktactoeComponent;
  let fixture: ComponentFixture<TiktactoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktactoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiktactoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
