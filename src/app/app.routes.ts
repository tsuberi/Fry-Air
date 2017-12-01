import { Routes, RouterModule } from "@angular/router";
import { RoomformComponent } from "../app/views/roomform/roomform.component"
import { RoomsComponent } from "../app/views/rooms/rooms.component"


import { SigninComponent } from "./views/signin/signin.component";


import { DashboardComponent } from "./views/dashboard/dashboard.component";

const appRoutes: Routes = [
    {path: '',component: SigninComponent},
    {path: 'signin',component: SigninComponent},
    {path: 'rooms',component: RoomsComponent} , 
    {path: 'roomform',component: RoomformComponent}
  
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
 