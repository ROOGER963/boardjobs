import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path:'students',component:StudentsComponent},
  // rutas hijas para el componente students con salida a product
  { 
    path:'',
    component:StudentsComponent, 
    children:[
      { 
        path:'product',
        component:DashboardComponent
      } 
    ]
  },
  { path:'admin', component: AdminComponent},
  { path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }