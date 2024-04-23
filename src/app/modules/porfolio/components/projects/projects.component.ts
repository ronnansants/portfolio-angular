import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ MatDialogModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialogModule);

  arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/imgs/projects/logo.png',
      alt: 'Logo projeto BUILDZ',
      wid: '128px',
      hei: '128px',
      description: 'Projeto pessoal feito a partir de uma ideia de negocio que tive com meu sócio.',
      links: [{
        name: 'Conheça a empresa',
        href: '#'
      }]
    },
    {
      src: 'assets/imgs/projects/lista-de-tarefas.png',
      alt: 'Projeto lista de tarefas',
      wid: '128px',
      hei: '128px',
      description: 'Um aplicativo de lista de tarefas, para ajudar os usuarios a se organizarem. Feito em Angular 2 V17 e NodeJS.',
      links: [{
        name: 'Visualize o APP',
        href: '#'
      }]
    }
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass
    })
  }
}
