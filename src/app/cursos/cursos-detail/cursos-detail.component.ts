import { Component , OnInit, Input} from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-detail',
  templateUrl: './cursos-detail.component.html',
  styleUrls: ['./cursos-detail.component.css']
})
export class CursosDetailComponent {
  @Input() curso!:Curso;
  constructor() { }

  ngOnInit(): void {
  }



}
