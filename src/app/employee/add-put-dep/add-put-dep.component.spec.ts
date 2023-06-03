import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPutDepComponent } from './add-put-dep.component';

describe('AddPutDepComponent', () => {
  let component: AddPutDepComponent;
  let fixture: ComponentFixture<AddPutDepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPutDepComponent]
    });
    fixture = TestBed.createComponent(AddPutDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
