import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverAllCasesComponent } from './over-all-cases.component';

describe('OverAllCasesComponent', () => {
  let component: OverAllCasesComponent;
  let fixture: ComponentFixture<OverAllCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverAllCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverAllCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
