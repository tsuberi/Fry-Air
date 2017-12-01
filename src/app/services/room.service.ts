import {  Injectable} from '@angular/core';
import {  AngularFireDatabase,  AngularFireList,  AngularFireObject} from 'angularfire2/database';
import {  RoomDTO} from "../dto/room.dto"
import {  NgModule} from '@angular/core';
import { AuthService} from "../services/auth.service"
import { PlayerDTO } from '../dto/player.dto';
import { debug } from 'util';
import { Observable } from 'rxjs/Observable';






@Injectable()
export class RoomService {
  private basePath = '/rooms';

  itemsRef: AngularFireList < RoomDTO[] > ;
  itemRef:  AngularFireList<RoomDTO>;   //   single object


  constructor(private db: AngularFireDatabase , private AuthService : AuthService) {
    this.itemsRef = db.list(this.basePath);
    this.itemRef = db.list(this.basePath);

  }

  AddRoom(Room: RoomDTO) {

    this.itemRef.push(Room)
  }

  updateItem(key: string, value: any): Promise < any > {
    return Promise.resolve(this.itemsRef.update(key, value));
  }

  GetRoomList1(query ? ) {
    return this.itemsRef.valueChanges()
  }

  GetRoomList(query ? ) {
    return this.itemsRef.snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), {
        $key: snap.key
      }))
    })
  }

}
