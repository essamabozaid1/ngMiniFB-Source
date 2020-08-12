import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanageaccountRoutingModule } from './usermanageaccount-routing.module';
import { UserinfolistComponent } from './userinfolist/userinfolist.component';


@NgModule({
  declarations: [UserinfolistComponent],
  imports: [
    CommonModule,
    UsermanageaccountRoutingModule
  ]
})
export class UsermanageaccountModule { }
