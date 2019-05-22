import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekAbooComponent } from './peek-aboo.component';

describe('PeekAbooComponent', () => {
  let component: PeekAbooComponent;
  let fixture: ComponentFixture<PeekAbooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeekAbooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeekAbooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
