import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';



@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit{

 foods:Food[] = [];
 starRating = Food.stars;
 
  
 constructor(private foodService: FoodService, activatedRoute: ActivatedRoute){
   activatedRoute.params.subscribe((params) => {
    if(params.searchName){
      this.foods = this.foodService.getAllFoodsBySearch(params.searchName);
    }else if(params.tag){
      this.foods = this.foodService.getAllPizzaByTag(params.tag);
    }else{
      this.foods = foodService.getAll();
    }
   })

  }
  ngOnInit(): void {
    
  }

}
