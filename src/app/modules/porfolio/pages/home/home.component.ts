import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../../components/error/error.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent, CommonModule, ErrorComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
