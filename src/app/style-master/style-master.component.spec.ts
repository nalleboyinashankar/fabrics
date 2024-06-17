import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleMasterComponent } from './style-master.component';

describe('StyleMasterComponent', () => {
  let component: StyleMasterComponent;
  let fixture: ComponentFixture<StyleMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleMasterComponent]
    });
    fixture = TestBed.createComponent(StyleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
