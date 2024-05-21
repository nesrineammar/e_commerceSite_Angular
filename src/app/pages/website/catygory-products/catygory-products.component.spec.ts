import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatygoryProductsComponent } from './catygory-products.component';

describe('CatygoryProductsComponent', () => {
  let component: CatygoryProductsComponent;
  let fixture: ComponentFixture<CatygoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatygoryProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatygoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
