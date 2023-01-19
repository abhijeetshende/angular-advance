import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTopComponent } from './c-top.component';

describe('CTopComponent', () => {
  let component: CTopComponent;
  let fixture: ComponentFixture<CTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
