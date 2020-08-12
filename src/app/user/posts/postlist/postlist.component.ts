
import { PostdeleteComponent } from './../postdelete/postdelete.component';
import { PostaddComponent } from './../postadd/postadd.component';
import { PosteditComponent } from './../postedit/postedit.component';
import { Ipost } from './../../modelsUser/ipost';
import { PostService } from './../../../allservices/post.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private postserv: PostService, private dig: MatDialog,private actRout:ActivatedRoute,private rout:Router) { }


  allData: Ipost[];
  newsFeed(){
    this.postserv.getNewsFeed().subscribe({
      next: (item) => { this.allData = item },
      error: () => { },
      complete: () => { console.log("done") }
    })
  }
  displayPosts(userId:number) {
    this.postserv.getPosts(userId).subscribe({
      next: (item) => { this.allData = item },
      error: () => { },
      complete: () => { console.log("done") }
    })
  }

  // displayOnePost(item:Ipost){
  //   console.log(this.allData.length)
  //   this.allData=[];
  //   this.allData.push(item);
  // }

  openAddDialog(){
    let userID:number=1; // will change after adjust the users
    const dialogRef = this.dig.open(PostaddComponent, {
      width: '60%',
      data: { userId:userID}

    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result != null) {
        // console.log(result);
        this.allData.unshift(result);
        // console.log(this.allData);
      }
    });

  }
  openEditDialog(post: Ipost) {
    const dialogRef = this.dig.open(PosteditComponent, {
      width: '60%',
      data: {
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body,
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result != null) {
        post.body = result.body;
        post.title = result.title;
      }
    });
  }

  openDeleteDialog(index:number,post:Ipost){

    const dialogRef = this.dig.open(PostdeleteComponent, {
      width: '60%',
      data: { id: post.id  }

    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result != null) {
        this.allData.splice(index,1);
      }
    });
  }

ngOnInit(): void {
  let userid= this.actRout.snapshot.paramMap.get('id');
  console.log(userid);
  if(userid!=null){
    console.log("not null");
    this.displayPosts(parseInt(userid));
  }else{
    console.log("null");
    this.newsFeed();
  }
}




}
