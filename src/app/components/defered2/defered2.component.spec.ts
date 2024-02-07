import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defered2Component } from './defered2.component';

describe('Defered2Component', () => {
  let component: Defered2Component;
  let fixture: ComponentFixture<Defered2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defered2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Defered2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
