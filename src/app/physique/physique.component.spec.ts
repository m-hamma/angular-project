import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiqueComponent } from './physique.component';

describe('PhysiqueComponent', () => {
  let component: PhysiqueComponent;
  let fixture: ComponentFixture<PhysiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysiqueComponent]
    });
    fixture = TestBed.createComponent(PhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
