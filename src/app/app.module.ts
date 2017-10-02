import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerModule } from './containers/main-container/main-container.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
