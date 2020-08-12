import { FormsModule } from '@angular/forms';
import { MaterialsModule } from './../../materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostlistComponent } from './postlist/postlist.component';
import { PostaddComponent } from './postadd/postadd.component';
import { PosteditComponent } from './postedit/postedit.component';
import { PostdeleteComponent } from './postdelete/postdelete.component';



@NgModule({
  declarations: [PostlistComponent, PostaddComponent, PosteditComponent, PostdeleteComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialsModule,
    FormsModule
  ]
})
export class PostsModule { }
