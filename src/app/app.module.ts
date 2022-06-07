import { AnalogClockModule } from './analog-clock/analog-clock.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnalogClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
