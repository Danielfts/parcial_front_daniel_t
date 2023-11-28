import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosDetailComponent } from './cursos-detail/cursos-detail.component';



@NgModule({
  declarations: [
    CursosListComponent,
    CursosDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
