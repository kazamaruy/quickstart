import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { FeraComponent } from './fera/fera.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { RoutingModule } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, LazyLoadImageModule, RouterModule, RoutingModule ],
  declarations: [ AppComponent,
    FeraComponent
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
