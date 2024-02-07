import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defered1Component } from './defered1.component';

describe('Defered1Component', () => {
  let component: Defered1Component;
  let fixture: ComponentFixture<Defered1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defered1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Defered1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
