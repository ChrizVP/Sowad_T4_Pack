import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoComponent } from './addProducto.component';

describe('AddProductoComponent', () => {
  let component: AddProductoComponent;
  let fixture: ComponentFixture<AddProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
