import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEditorDataComponent } from './number-editor-data.component';

describe('NumberEditorDataComponent', () => {
  let component: NumberEditorDataComponent;
  let fixture: ComponentFixture<NumberEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
