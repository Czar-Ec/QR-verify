import { Component, Input, OnInit } from '@angular/core';
import { Guest } from '../qr-service/qr-data';

@Component({
  selector: 'app-guest-display',
  templateUrl: './guest-display.component.html',
  styleUrls: ['./guest-display.component.scss']
})
export class GuestDisplayComponent implements OnInit {

  private _guest: Guest = null;

  get guest(): Guest {
    return this._guest;
  }

  @Input() set guest(val: Guest) {
    this._guest = val;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
