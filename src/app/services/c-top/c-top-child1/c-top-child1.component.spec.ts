import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTopChild1Component } from './c-top-child1.component';

describe('CTopChild1Component', () => {
  let component: CTopChild1Component;
  let fixture: ComponentFixture<CTopChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTopChild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTopChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
