import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ButtonComponentModule } from 'src/app/shared/button/button-component.module';
import { InputComponentModule } from 'src/app/shared/input-component/input-component.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ButtonComponentModule,
    InputComponentModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
