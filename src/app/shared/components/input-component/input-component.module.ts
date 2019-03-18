import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponentComponent } from './input-component.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [InputComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    InputComponentComponent
  ]
})
export class InputComponentModule { }
