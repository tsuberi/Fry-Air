import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SigninComponent } from './views/signin/signin.component';
import { RoomsComponent } from './views/rooms/rooms.component';
import { RoomformComponent } from './views/roomform/roomform.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';



import { AuthService } from './services/auth.service';
import { RoomService } from './services/room.service';
import { GameService } from './services/game.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutes } from "./app.routes";

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RoomComponent } from './views/room/room.component';



@NgModule({
  declarations: [
    AppComponent,    
    SigninComponent,
    RoomsComponent,
    DashboardComponent,
    RoomformComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  providers: [AuthService , RoomService , GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
