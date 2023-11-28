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
  ofrecenCertificado:string[] = [];
  ofrecenCertificadoString:string = '';
  show:boolean = false;
  selectedCurso!:Curso;

  onClick(curso:Curso){
    console.log('Click en el botón');
    this.selectedCurso = curso;
    this.show = true;
  }

  ngOnInit(): void {
    this.service.getCursos().subscribe(
      (data) => {
        console.log(data);
        this.cursos = data;
        this.cursos.forEach((curso, index) => {
          if (curso.offers_certificate == true){
            this.ofrecenCertificado.push(index.toString());
          }
        });
        this.ofrecenCertificadoString = this.ofrecenCertificado.join(', ');
      }
    );
  }

}
