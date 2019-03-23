import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedInputComponent } from './shared-input.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SharedInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    SharedInputComponent
  ]
})
export class SharedInputModule { }
