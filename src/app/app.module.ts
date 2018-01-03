import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MsgsComponent } from './msgs/msgs.component';



import { ImgService } from './img.service';
import { MsgService } from './msg.service';
import { AppRoutingModule } from './/app-routing.module';
import { InMemoryDataService } from './in-memory-data.service';


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
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ImgService, MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
