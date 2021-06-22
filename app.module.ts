import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
//import {FormControl} from '@angular/forms';

const material=[
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  //FormControl,
  MatButtonModule,
  MatIconModule,
  
]
@NgModule({
  imports:[material,BrowserModule,
    BrowserAnimationsModule],
  exports:[material],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
