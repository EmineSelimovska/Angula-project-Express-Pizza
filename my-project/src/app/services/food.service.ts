import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { TagContentType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return sample_foods;
  }

  getAllFoodsBySearch(searchName: string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchName.toLowerCase()));
  }

  getAllTags(): Tag[]{
    return sample_tags
  }

  getAllPizzaByTag(tag:string):Food[]{
    return this.getAll().filter(food => food.tags?.includes(tag))
  }

  getFoodById(foodId:string):Food{
   return this.getAll().find(food => food.id == foodId) ?? new Food;
  }

}
