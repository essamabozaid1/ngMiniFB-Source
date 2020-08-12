import { PostService } from './../../../allservices/post.service';
import { Ipost } from './../../modelsUser/ipost';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-postedit',
  templateUrl: './postedit.component.html',
  styleUrls: ['./postedit.component.css']
})
export class PosteditComponent implements OnInit {

  post:Ipost;
  constructor(
    private postServ:PostService,
    private digRef:MatDialogRef<PosteditComponent>,
    @Inject(MAT_DIALOG_DATA)  private data:Ipost) {
     // console.log(data);
      this.post=this.data;
    //  console.log(this.post);
    }
    editPost()
    {
      this.postServ.editPost(this.post).subscribe();
      this.digRef.close(this.post);
    }

    onNoClick():void{
      this.digRef.close();
    };

  ngOnInit(): void {  }

}
