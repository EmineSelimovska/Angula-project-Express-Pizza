import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';
import { User } from 'src/app/shared/models/User';



@Component({
  selector: 'app-orders-track-page',
  templateUrl: './orders-track-page.component.html',
  styleUrls: ['./orders-track-page.component.css']
})
export class OrdersTrackPageComponent implements OnInit{

  order!: Order;
  user!:User;

 
 
  constructor(activatedRoute: ActivatedRoute,
    public orderService: OrderService) {
      const params = activatedRoute.snapshot.params;
      if(!params.orderId){
        return;
      }

      orderService.orderTrackById(params.orderId).subscribe(order => {
        this.order = order;
      
      
      })
    }
  
  ngOnInit(): void {
   
  }
  


}
