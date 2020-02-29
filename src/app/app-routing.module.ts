import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/detail',
    pathMatch: 'full'
  },
  {path:"detail",component:EmployeeDetailComponent },
  {path:"login",component:LoginComponent },
  {path:"dashboard",component:DashboardComponent},//,canActivate: [AuthGuard] 
  {path:"payment",component:PaymentComponent,canActivate: [AuthGuard] },
  {path:"about",component:AboutComponent },//,canActivate: [AuthGuard]
  {path:"menu",component:AboutComponent,canActivate: [AuthGuard] },
  {path:"contact",component:ContactComponent,canActivate: [AuthGuard] },
  {path:"elements",component:AboutComponent,canActivate: [AuthGuard] }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
