import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveinputComponent } from './directiveinput.component';

describe('DirectiveinputComponent', () => {
  let component: DirectiveinputComponent;
  let fixture: ComponentFixture<DirectiveinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
