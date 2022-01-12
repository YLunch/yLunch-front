import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ]
})
export class RestaurantsModule { }
