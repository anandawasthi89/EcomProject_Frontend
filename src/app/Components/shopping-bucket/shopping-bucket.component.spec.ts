import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBucketComponent } from './shopping-bucket.component';

describe('ShoppingBucketComponent', () => {
  let component: ShoppingBucketComponent;
  let fixture: ComponentFixture<ShoppingBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
