import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITareasGrupoComponent } from './i-tareas-grupo.component';

describe('ITareasGrupoComponent', () => {
  let component: ITareasGrupoComponent;
  let fixture: ComponentFixture<ITareasGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITareasGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITareasGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
