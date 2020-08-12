import { PosteditComponent } from './user/posts/postedit/postedit.component';
import { PostaddComponent } from './user/posts/postadd/postadd.component';
import { PostService } from './allservices/post.service';
import { MaterialsModule } from './materials/materials.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialsModule,


  ],
  providers: [PostService],
  bootstrap: [AppComponent],
  entryComponents:[PostaddComponent,PosteditComponent]
})
export class AppModule { }
