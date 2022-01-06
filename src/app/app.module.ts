import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicApiComponent } from './components/public-api/public-api.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [AppComponent, PublicApiComponent, HomeComponent, ModalComponent],
    imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [ModalComponent]
})
export class AppModule {}
