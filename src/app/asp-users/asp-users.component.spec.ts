import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspUsersComponent } from './asp-users.component';

describe('AspUsersComponent', () => {
  let component: AspUsersComponent;
  let fixture: ComponentFixture<AspUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspUsersComponent]
    });
    fixture = TestBed.createComponent(AspUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
