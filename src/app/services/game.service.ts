import { Injectable } from '@angular/core';
import { RoomService } from "../services/room.service"
import { RoomDTO } from "../dto/room.dto"
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class GameService {

  public roomsObs: Observable<RoomDTO[]>; //  list of objects
  public rooms: RoomDTO[]; //  list of objects

  constructor(private RoomService : RoomService) {
    this.roomsObs = this.RoomService.GetRoomList();
   }

   JoinRoom(room : RoomDTO) : void {
     //this.RoomService.JoinRoom(room);

   }

}
