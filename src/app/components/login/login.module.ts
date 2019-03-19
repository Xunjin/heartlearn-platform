import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ButtonComponentModule } from 'src/app/shared/components/button/button-component.module';
import { OpacityOnHoverModule } from 'src/app/shared/directives/opacity-on-hover.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ButtonComponentModule,
    FormsModule,
    OpacityOnHoverModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
