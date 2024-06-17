import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaddComponent } from './openadd.component';

describe('OpenaddComponent', () => {
  let component: OpenaddComponent;
  let fixture: ComponentFixture<OpenaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenaddComponent]
    });
    fixture = TestBed.createComponent(OpenaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
