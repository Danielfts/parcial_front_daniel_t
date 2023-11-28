import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  constructor(
    private service:CursosService
  ) { }

  cursos:Curso[] = [];

  onClick(){
    console.log('Click en el botón');
  }

  ngOnInit(): void {
    this.service.getCursos().subscribe(
      (data) => {
        console.log(data);
        this.cursos = data;
      }
    );
  }

}
