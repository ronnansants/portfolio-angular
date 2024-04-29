import { Component } from '@angular/core';
import { ProjectsComponent } from '../../projects/projects.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [ ProjectsComponent, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule ],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent {

}
