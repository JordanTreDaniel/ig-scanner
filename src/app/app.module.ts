import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';

import { ImgService } from './img.service';
import { MsgService } from './msg.service';
import { MsgsComponent } from './msgs/msgs.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ImgDetailComponent,
    MsgsComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [ImgService, MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
