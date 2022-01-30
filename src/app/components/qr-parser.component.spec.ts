import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { QrParserComponent } from './qr-parser.component';

describe('QrParserComponent', () => {
  let component: QrParserComponent;
  let fixture: ComponentFixture<QrParserComponent>;

  const activatedRouteStub = {
    paramMap: of()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrParserComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
