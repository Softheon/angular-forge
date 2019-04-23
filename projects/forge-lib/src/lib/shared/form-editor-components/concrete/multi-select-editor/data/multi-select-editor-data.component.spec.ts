import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectEditorDataComponent } from './multi-select-editor-data.component';

describe('MultiSelectEditorDataComponent', () => {
  let component: MultiSelectEditorDataComponent;
  let fixture: ComponentFixture<MultiSelectEditorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectEditorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectEditorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
