import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementFaithComponent } from './statement-faith.component';

describe('StatementFaithComponent', () => {
  let component: StatementFaithComponent;
  let fixture: ComponentFixture<StatementFaithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementFaithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementFaithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
