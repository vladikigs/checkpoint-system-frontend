import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Door} from './door';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoorService {


  public fetchStatus: string = null;

  constructor(private http: HttpClient) { }

  sendFormData(door: Door): void {
    this.http.get<any>(`http://${environment.apiUrl}/check?roomId=${door.roomId}&entrance=${door.entrance}&keyId=${door.keyId}`).subscribe({
      next: data => {
        if (door.entrance && data) {
          this.fetchStatus = 'User success enter in room ' + door.roomId;
        }
        if (!door.entrance && data) {
          this.fetchStatus = 'User success exit in room ' + door.roomId;
        }
      },
      error: error => {
        this.fetchStatus = 'Error: ' + error.error;
      }
    });
  }

}
