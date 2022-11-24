import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path: 'user-reg', component: UserRegComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: LoginComponent},
  {path: 'user-data', component: UserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
