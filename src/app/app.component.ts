import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qr-verify';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      `logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`https://raw.githubusercontent.com/Czar-Ec/Czar-Ec/master/assets/crescent.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `qr`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/qr.svg`)
    );
  }

  public goToMain() {
    window.open('https://czar-ec.github.io/', '_self');
  }
}
