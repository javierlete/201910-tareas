import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasTablaComponent } from './tareas-tabla.component';

describe('TareasTablaComponent', () => {
  let component: TareasTablaComponent;
  let fixture: ComponentFixture<TareasTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
