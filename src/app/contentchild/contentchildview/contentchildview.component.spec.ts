import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildviewComponent } from './contentchildview.component';

describe('ContentchildviewComponent', () => {
  let component: ContentchildviewComponent;
  let fixture: ComponentFixture<ContentchildviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentchildviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentchildviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
