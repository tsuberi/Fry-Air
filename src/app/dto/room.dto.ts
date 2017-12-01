import { PlayerDTO } from "../dto/player.dto"
import { Injectable } from "@angular/core"



export class RoomDTO {
    $key: string;
    RoomName : string;
    Description : string;
    Strategy : string;
    MinPlayers : number;
    MaxPlayers : number;
    MaxSplits : number;
    MinSale : number;
    MinBuy : number;
    Players : Array<PlayerDTO>  = new Array<PlayerDTO>();

    constructor() {

     }
}
