import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "ANALISTA JUNIOR",
        p: 'INBRA SYSTEMS | 2020 - 2021',
      },
      text: '<p>Durante meu período na INBRA, atuei com a parte de Bancos de Dados <em>MySQL</em>, dando suporte na infraestrutura da empresa. <br/>Tambem desenvolvendo novas rotinas e serviços para o sistema cargo chefe da empresa.</p>',
    },
    {
      summary: {
        strong: "Estagio - Desenvolvedor C#, .NET",
        p: "UNIUBE | 2019 - 2020",
      },
      text: '<p>Minhas principais funções no período de estágio, eram de desenvolver telas e <em>aplicações internas</em> para a instituição. Melhorar e otimizar códigos e rotinas já existentes, testando processos a procura de bug e aperfeiçoamento.</p>',
    }
  ])
}
