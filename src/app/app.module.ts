import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {TestService} from './test.service';
import {HttpClientModule} from '@angular/common/http';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    CardviewComponent,
    ListviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
