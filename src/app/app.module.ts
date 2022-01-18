import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { hashFactory } from './app.factories';
import { HASH_CONFIG } from './app.tokens';
import { ConfigurationService } from './configuration.service';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    ConfigurationService,
    {
      provide: HASH_CONFIG,
      useFactory: hashFactory,
      deps: [ConfigurationService]
    },
    {
      provide: APP_INITIALIZER, deps: [ConfigurationService], multi: true,
      useFactory: (configurationService: ConfigurationService) => () => configurationService.loadConfig('assets/config.json').toPromise(),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
