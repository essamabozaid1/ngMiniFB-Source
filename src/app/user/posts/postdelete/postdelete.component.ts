import { Component, OnInit, Inject } from '@angular/core';
import { PostService } from 'src/app/allservices/post.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-postdelete',
  templateUrl: './postdelete.component.html',
  styleUrls: ['./postdelete.component.css']
})
export class PostdeleteComponent implements OnInit {
  constructor(private postServ:PostService,
    private digRef:MatDialogRef<PostdeleteComponent>,
    @Inject(MAT_DIALOG_DATA)  private data:any) {

    }

  deletePost(){
    this.postServ.DeletePost(this.data).subscribe(
      {complete:()=>{ this.digRef.close(this.data);}}
    );

  }
  onNoClick():void{
    this.digRef.close();
  };
  ngOnInit(): void {
  }

}
