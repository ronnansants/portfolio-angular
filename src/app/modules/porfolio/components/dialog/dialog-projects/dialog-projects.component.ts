import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [ MatDialogModule ],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) private _data: IProjects){}
  
  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }
}
