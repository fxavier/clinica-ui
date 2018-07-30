import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PacienteModule } from './paciente/paciente.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PacienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
