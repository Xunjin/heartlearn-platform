import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
<<<<<<< HEAD
import { SharedButtonModule } from 'src/app/shared/components/button/shared-button.module';
import { SharedInputModule } from 'src/app/shared/components/input/shared-input.module';
=======
import { ButtonComponentModule } from 'src/app/shared/components/button/button-component.module';
>>>>>>> b92a00d19f7b388cab7b8886569e613d90dbd036
import { OpacityOnHoverModule } from 'src/app/shared/directives/opacity-on-hover.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    SharedButtonModule,
    SharedInputModule,
=======
    ButtonComponentModule,
>>>>>>> b92a00d19f7b388cab7b8886569e613d90dbd036
    FormsModule,
    OpacityOnHoverModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
