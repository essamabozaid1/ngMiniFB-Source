import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"posts",loadChildren:()=>import('./posts/posts.module').then(m=>m.PostsModule)},
  {path:":id", loadChildren:()=>import('./posts/posts.module').then(m=>m.PostsModule)},
  {path:"userAccount",loadChildren:()=>import('./usermanageaccount/usermanageaccount.module').then(m=>m.UsermanageaccountModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
