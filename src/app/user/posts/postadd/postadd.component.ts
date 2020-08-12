import { Ipost } from './../../modelsUser/ipost';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/allservices/post.service';

@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnInit {

  newPost:Ipost={
    userId:0,
    id:null,
    title:null,
    body:null
  }

  constructor(
    private postServ:PostService,
    private digRef:MatDialogRef<PostaddComponent>,
    @Inject(MAT_DIALOG_DATA)  private userIddata:any,
    )
    {
      this.newPost.userId=userIddata.userId;
    }
    addPost(){

      this.postServ.addPost(this.newPost).subscribe({
        next:(item)=>{this.newPost.id=item.id},
        complete:()=>{ this.digRef.close(this.newPost);}
        }
      );
    }

    onNoClick():void{
      let x:Ipost={id:2 , userId:1 , body:'esas', title:'sgsdg'};

      this.digRef.close();
    };
    ngOnInit(): void {
    }


}
