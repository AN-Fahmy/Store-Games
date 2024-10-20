import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessthewordComponent } from './guesstheword.component';

describe('GuessthewordComponent', () => {
  let component: GuessthewordComponent;
  let fixture: ComponentFixture<GuessthewordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessthewordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuessthewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
