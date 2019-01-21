import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlListBuilderComponent } from './sql-list-builder.component';

describe('SqlListBuilderComponent', () => {
  let component: SqlListBuilderComponent;
  let fixture: ComponentFixture<SqlListBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlListBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlListBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
