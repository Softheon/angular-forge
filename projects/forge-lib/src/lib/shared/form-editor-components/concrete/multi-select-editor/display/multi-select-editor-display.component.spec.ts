import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectEditorDisplayComponent } from './multi-select-editor-display.component';

describe('MultiSelectEditorDisplayComponent', () => {
  let component: MultiSelectEditorDisplayComponent;
  let fixture: ComponentFixture<MultiSelectEditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectEditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectEditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
