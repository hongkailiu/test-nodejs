import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TabsetComponent } from './tabset/tabset.component';

import {TestModule} from './test/test.module';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TranslatePipe,
    TabsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TestModule
  ],
  providers: [TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
