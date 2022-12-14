import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewallComponent } from './viewall/viewall.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const myroutes:Routes=[
  {
    path:"",component:AdduserComponent},
    {path:"viewall",component:ViewallComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ViewallComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
RouterModule.forRoot(myroutes),
FormsModule,
HttpClientModule

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
