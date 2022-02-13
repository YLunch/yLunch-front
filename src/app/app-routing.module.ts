import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./common/authentificate/login/login.component";

const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./restaurants/restaurants.module').then(
        (_) => _.RestaurantsModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((_) => _.CustomersModule),
  },
  {
    path: 'common/authenticate/login', component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
