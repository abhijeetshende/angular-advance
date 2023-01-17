import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputListenerComponent } from './output-listener.component';

describe('OutputListenerComponent', () => {
  let component: OutputListenerComponent;
  let fixture: ComponentFixture<OutputListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputListenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
