import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTrackPageComponent } from './orders-track-page.component';

describe('OrdersTrackPageComponent', () => {
  let component: OrdersTrackPageComponent;
  let fixture: ComponentFixture<OrdersTrackPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersTrackPageComponent]
    });
    fixture = TestBed.createComponent(OrdersTrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
