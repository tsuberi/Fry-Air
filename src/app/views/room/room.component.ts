import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {
  RoomDTO
} from "../../dto/room.dto"

import { GameService } from "../../services/game.service"

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() room: RoomDTO;
  constructor(private GameService : GameService) {}

  ngOnInit() {}

  Join(): void {

    //this.GameService.JoinRoom(this.room);

  }

}
