import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/pages/search/search.component';
import { TagsComponent } from './components/pages/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/pages/title/title.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
   
    
  ],
  imports: [
    BrowserModule,
     AdminRoutingModule,
    AppRoutingModule,
    NgbModule
    

    ],

  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
