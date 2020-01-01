import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule } from '@angular/material';
  import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatCheckboxModule, MatSelectModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { DispalyerComponent } from './dispalyer/dispalyer.component';



@NgModule({
  declarations: [
    AppComponent,
    DispalyerComponent
  ],
  imports: [
   
    BrowserModule,
    MatSliderModule,
    MatRadioModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [DispalyerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
