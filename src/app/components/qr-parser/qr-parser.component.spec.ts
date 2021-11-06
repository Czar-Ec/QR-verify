import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrParserComponent } from './qr-parser.component';

describe('QrParserComponent', () => {
  let component: QrParserComponent;
  let fixture: ComponentFixture<QrParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrParserComponent ]
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
