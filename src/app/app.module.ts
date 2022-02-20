import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './common/components/login/login.component';
import {FormComponent} from './common/components/login/form/form.component';
import {CommonModule} from "@angular/common";
import {RestaurantsRoutingModule} from "./restaurants/restaurants-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent, LoginComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    RestaurantsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
