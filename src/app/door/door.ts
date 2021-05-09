export class Door {

  roomId: number;
  entrance: boolean;
  keyId: number;


  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
