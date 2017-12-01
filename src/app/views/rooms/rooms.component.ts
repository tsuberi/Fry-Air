import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service"


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(public  GameService : GameService) { 
    

  }

  ngOnInit() {
    
  }

}
