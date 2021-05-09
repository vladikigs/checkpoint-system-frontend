import { Component, OnInit } from '@angular/core';
import { DoorService } from './door.service';
import { Door } from './door';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  public door: Door;
  public submitValueBtn = 'Выйти из комнаты';

  constructor(public doorService: DoorService) { }

  ngOnInit(): void {
    this.door = new Door({
      roomId: null,
      entrance: false,
      keyId: null
    });
  }

  entranceChange() {
    if (this.door.entrance) {
      this.submitValueBtn = 'Войти в комнату';
    } else {
      this.submitValueBtn = 'Выйти из комнаты';
    }
  }

  onSubmit(): void {
    this.doorService.sendFormData(this.door);
  }

}
