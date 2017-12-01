import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { RoomService } from "../../services/room.service"
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';
import { RoomDTO } from '../../dto/room.dto';
import { Router } from '@angular/router';


@Component({
  selector: 'roomform',
  templateUrl: './roomform.component.html',
  styleUrls: ['./roomform.component.css']
  
})
export class RoomformComponent implements OnInit {
  
  userForm: FormGroup;
  
  passReset = false; // set to true when password reset is triggered

  constructor(public auth  :AuthService ,private fb: FormBuilder , private RoomService : RoomService , private router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      RoomName :   new FormControl(),
      Description: new FormControl(),
      Strategy : new FormControl(),
      MinPlayers : new FormControl(),
      MaxPlayers : new FormControl(),
      MaxSplits : new FormControl(),      
      MinSale : new FormControl(),
      MinBuy : new FormControl()
   });

  }

  Cancel() : void {
    this.router.navigate(['rooms']);
  }

  createRomm(): void {
    let R = new RoomDTO();

    
    R.RoomName = this.userForm.value['RoomName'];    
    R.Description = this.userForm.value['Description'];
    R.Strategy = this.userForm.value['Strategy'];
    R.MinPlayers = this.userForm.value['MinPlayers'];
    R.MaxPlayers = this.userForm.value['MaxPlayers'];
    R.MaxSplits = this.userForm.value['MaxSplits'];
    R.MinSale = this.userForm.value['MinSale'];
    R.MinBuy = this.userForm.value['MinBuy'];

    this.RoomService.AddRoom(R);
    this.router.navigate(['rooms']);  
    
  }
  

}
