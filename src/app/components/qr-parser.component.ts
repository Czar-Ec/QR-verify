import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Guest } from './qr-service/qr-data';

import { QrService } from './qr-service/qr.service';

@Component({
  selector: 'app-qr-parser',
  templateUrl: './qr-parser.component.html',
  styleUrls: ['./qr-parser.component.scss']
})
export class QrParserComponent implements OnInit {

  public guests: Guest[] = []

  public invalidCode = false;

  public parsing = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private qrService: QrService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(
      switchMap((res: any) => {
        this.invalidCode = false;
        this.parsing = true;
        return this.qrService.validateInvite(res)
      }),
    ).subscribe(
      (res: any) => {
        this.parsing = false;
        // check if there are guests on that list
        if (!res || !Array.isArray(res) || !res.length) {
          this.invalidCode = true;
        }

        this.guests = res;
      },
      () => {
        this.invalidCode = true;
        this.parsing = false;
      }
    )
  }
}
