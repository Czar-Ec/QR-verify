import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { Guest } from './qr-service/qr-data';

import { QrService } from './qr-service/qr.service';

@Component({
  selector: 'app-qr-parser',
  templateUrl: './qr-parser.component.html',
  styleUrls: ['./qr-parser.component.scss']
})
export class QrParserComponent implements OnInit {

  public guests: Guest[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private qrService: QrService
  ) {
    this.activatedRoute.queryParamMap.pipe(
      switchMap((res: any) => this.qrService.validateInvite(res)),
    ).subscribe((res: any) => this.guests = res, (err) => this.router.navigateByUrl('/code'))
  }

  ngOnInit(): void {
  }

}
