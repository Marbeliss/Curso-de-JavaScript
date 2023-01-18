import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import { ProximoEnLaFilaComponent } from './components/proximo-en-la-fila/proximo-en-la-fila.component';

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    ProximoEnLaFilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
