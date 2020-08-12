import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';




const materials =[
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTooltipModule,
  MatDialogModule,
]
@NgModule({
  imports: [
    materials,
    CommonModule
  ],
  exports: [materials]
})
export class MaterialsModule { }
