import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeShowComponent } from './components/employee-show/employee-show.component';

const appRoutes: Routes = [
  {path: '', component:EmployeesComponent},
  {path: 'edit/:id', component:EmployeeEditComponent},
  {path: 'show', component:EmployeeShowComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    EmployeeEditComponent,
    EmployeeShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
