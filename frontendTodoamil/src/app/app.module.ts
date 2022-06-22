import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonFormComponent,
    PersonListComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
