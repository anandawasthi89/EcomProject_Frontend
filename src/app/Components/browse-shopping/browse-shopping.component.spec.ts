import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseShoppingComponent } from './browse-shopping.component';

describe('BrowseShoppingComponent', () => {
  let component: BrowseShoppingComponent;
  let fixture: ComponentFixture<BrowseShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
