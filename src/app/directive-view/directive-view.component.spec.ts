import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveViewComponent } from './directive-view.component';

describe('DirectiveViewComponent', () => {
  let component: DirectiveViewComponent;
  let fixture: ComponentFixture<DirectiveViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
