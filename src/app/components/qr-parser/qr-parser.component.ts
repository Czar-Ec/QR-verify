import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-parser',
  templateUrl: './qr-parser.component.html',
  styleUrls: ['./qr-parser.component.scss']
})
export class QrParserComponent implements OnInit {

  public id: any;

  constructor(
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
  }

  ngOnInit(): void {
  }

}
