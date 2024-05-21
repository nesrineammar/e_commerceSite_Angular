import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerOrdersComponent } from './custmer-orders.component';

describe('CustmerOrdersComponent', () => {
  let component: CustmerOrdersComponent;
  let fixture: ComponentFixture<CustmerOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmerOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
