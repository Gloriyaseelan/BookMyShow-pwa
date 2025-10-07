import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MybookingsComponent } from './pages/mybookings/mybookings.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SeatlayoutComponent } from './pages/seatlayout/seatlayout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'booking/:id', component: MybookingsComponent },
  { path: 'seat/:id', component: SeatlayoutComponent },
  { path: 'payment/:id', component: PaymentComponent }
  // {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
