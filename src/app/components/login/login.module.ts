import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SharedButtonModule } from 'src/app/shared/components/button/shared-button.module';
import { SharedInputModule } from 'src/app/shared/components/input/shared-input.module';
import { OpacityOnHoverModule } from 'src/app/shared/directives/opacity-on-hover.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedButtonModule,
    SharedInputModule,
    FormsModule,
    OpacityOnHoverModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
