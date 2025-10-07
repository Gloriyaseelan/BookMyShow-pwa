import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MybookingsComponent } from './pages/mybookings/mybookings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LocationComponent } from './pages/dialog/location.component';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './pages/movie/movie.component';
import { SeatlayoutComponent } from './pages/seatlayout/seatlayout.component';
import { BookseatComponent } from './pages/bookseat/bookseat.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MybookingsComponent,
    LocationComponent,
    MovieComponent,
    SeatlayoutComponent,
    BookseatComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
