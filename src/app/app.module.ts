import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookService} from './book.service';
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TestData} from './testdata';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { CompanyRoutingModule } from './company/company-routing.module';
import { PictureComponent } from './picture/picture.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData)

    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
