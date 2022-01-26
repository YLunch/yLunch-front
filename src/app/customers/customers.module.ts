import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { FormComponent } from './registration/form/form.component';
import {RestaurantsRoutingModule} from "../restaurants/restaurants-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [RegistrationComponent, FormComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],

})
export class CustomersModule {}
