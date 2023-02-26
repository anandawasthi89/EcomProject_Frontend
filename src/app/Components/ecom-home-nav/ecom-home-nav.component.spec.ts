import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECOMHomeNavComponent } from './ecom-home-nav.component';

describe('ECOMHomeNavComponent', () => {
  let component: ECOMHomeNavComponent;
  let fixture: ComponentFixture<ECOMHomeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECOMHomeNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECOMHomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
