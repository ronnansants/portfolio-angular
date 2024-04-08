import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal([
    "fa-brands fa-html5",
    "fa-brands fa-css3-alt",
    "fa-brands fa-js",
    "fa-brands fa-bootstrap",
    "fa-brands fa-sass",
    "fa-brands fa-node",
    "fa-brands fa-angular",
    "fa-brands fa-github",
    "icon-typescript"
  ])
}
