import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    InputTextModule,
    CalendarModule,
    DropdownModule,
    ButtonModule
  ],
  declarations: [PacienteCadastroComponent,
                 PacienteListaComponent],
  exports: [PacienteCadastroComponent,
            PacienteListaComponent]
})
export class PacienteModule { }
