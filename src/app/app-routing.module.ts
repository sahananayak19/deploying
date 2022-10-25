import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardviewComponent } from './cardview/cardview.component';
import { CustomerComponent } from './customer/customer.component';
import { ListviewComponent } from './listview/listview.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [{path:"customer",component:CustomerComponent},

{path:"orders",component:OrdersComponent},
{path:"about",component:AboutComponent},
{path:"login",component:LoginComponent},
{path:"cardview",component:CardviewComponent},
{path:"listview",component:ListviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
