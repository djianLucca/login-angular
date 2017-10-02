import { MaterializeModule } from 'ng2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InputUserComponent } from './input-user/input-user.component';
import { InputPassComponent } from './input-pass/input-pass.component';
import { BtnSubmitComponent } from './btn-submit/btn-submit.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  exports: [
    LoginComponent, 
    InputUserComponent, 
    InputPassComponent
  ],
  declarations: [
    LoginComponent, 
    InputUserComponent, 
    InputPassComponent, BtnSubmitComponent
  ]
})
export class LoginModule { }
