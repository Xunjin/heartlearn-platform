import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ButtonComponentModule } from 'src/app/shared/components/button/button-component.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ButtonComponentModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
