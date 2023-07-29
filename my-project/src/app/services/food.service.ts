import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { TagContentType } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_TAG_URL, FOODS_SEARCH_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearch(searchName: string){
    return this.httpClient.get<Food[]>(FOODS_SEARCH_URL + searchName);
  }

  getAllTags(): Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(FOODS_TAGS_URL)
  }

  getAllPizzaByTag(tag:string):Observable<Food[]>{
    return this.httpClient.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId:string):Observable<Food>{
   return this.httpClient.get<Food>(FOODS_BY_ID_URL + foodId);
  }

}
