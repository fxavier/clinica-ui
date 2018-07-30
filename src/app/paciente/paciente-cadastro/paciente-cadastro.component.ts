import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent implements OnInit {

  constructor() { }

  sexo = [
    { label: 'Feminino', value: 1 },
    { label: 'Masculino', value: 2}
  ];

  nacionalidades = [
   {label: 'Mocambicana', value: 1},
   {label: 'Americana', value: 2},
   {label: 'Portuguesa', value: 3}
  ];

  estadoCivil = [
    {label: 'Casado', value: 1},
    {label: 'Solteiro', value: 2},
    {label: 'Divorciado', value: 3}
  ];

  tipoDocumento = [
    {label: 'BI', value: 1},
    {label: 'Passaporte', value: 2},
    {label: 'Dire', value: 3}
  ];

  ngOnInit() {
  }

}
