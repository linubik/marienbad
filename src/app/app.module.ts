import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarienbadComponent } from './marienbad/marienbad.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MarienbadComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
