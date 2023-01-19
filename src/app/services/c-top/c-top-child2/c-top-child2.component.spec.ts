import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTopChild2Component } from './c-top-child2.component';

describe('CTopChild2Component', () => {
  let component: CTopChild2Component;
  let fixture: ComponentFixture<CTopChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTopChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTopChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
