import { MaterializeModule } from 'ng2-materialize';
import { LoginModule } from './../../components/login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './../../components/navbar/navbar.module';
import { MainContainerComponent } from './main-container.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    MaterializeModule,
    LoginModule
  ],
  exports: [
    MainContainerComponent
  ],
  declarations: [MainContainerComponent]
})
export class MainContainerModule { }
