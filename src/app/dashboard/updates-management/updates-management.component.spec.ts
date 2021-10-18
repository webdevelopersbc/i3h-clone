import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesManagementComponent } from './updates-management.component';

describe('UpdatesManagementComponent', () => {
  let component: UpdatesManagementComponent;
  let fixture: ComponentFixture<UpdatesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
