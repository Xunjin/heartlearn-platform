import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { SharedButtonModule } from '../shared/components/button/shared-button.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    SharedButtonModule
  ]
})
export class ErrorsModule { }
