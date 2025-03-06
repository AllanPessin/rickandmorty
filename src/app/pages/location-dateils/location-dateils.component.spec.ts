import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDateilsComponent } from './location-dateils.component';

describe('LocationDateilsComponent', () => {
  let component: LocationDateilsComponent;
  let fixture: ComponentFixture<LocationDateilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDateilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDateilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
