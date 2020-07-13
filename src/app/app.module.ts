import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
