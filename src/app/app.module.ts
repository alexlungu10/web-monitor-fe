import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RestService } from './service/restService.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ChartsModule, HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
