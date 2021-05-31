import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import * as fromComponents  from './components';
import { TitleH1Component } from './components/titles/title-h1/title-h1.component';
import { CardUserComponent } from './components/cards/card-user/card-user.component'
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardLoaderComponent } from './components/loaders/card-loader/card-loader.component';
import { LoginComponent } from './components/forms/login/login.component';
import { RegisterComponent } from './components/forms/register/register.component';

@NgModule({
  declarations: [...fromComponents.components, TitleH1Component, CardUserComponent, CarouselComponent, CardLoaderComponent, LoginComponent, RegisterComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
