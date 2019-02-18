import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustInComponent } from './just-in.component';

describe('JustInComponent', () => {
  let component: JustInComponent;
  let fixture: ComponentFixture<JustInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
