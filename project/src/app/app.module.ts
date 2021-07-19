import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CustompipePipe } from './custompipe.pipe';
import { EmployeenameComponent } from './employeename/employeename.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CustompipePipe,
    EmployeenameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
