import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetailComponent } from './cursos-detail.component';

describe('CursosDetailComponent', () => {
  let component: CursosDetailComponent;
  let fixture: ComponentFixture<CursosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosDetailComponent]
    });
    fixture = TestBed.createComponent(CursosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
