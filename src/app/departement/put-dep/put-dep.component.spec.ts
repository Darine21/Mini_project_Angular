import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDepComponent } from './put-dep.component';

describe('PutDepComponent', () => {
  let component: PutDepComponent;
  let fixture: ComponentFixture<PutDepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutDepComponent]
    });
    fixture = TestBed.createComponent(PutDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
