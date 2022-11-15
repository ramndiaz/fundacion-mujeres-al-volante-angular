import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaNoticiasComponent } from './actualiza-noticias.component';

describe('ActualizaNoticiasComponent', () => {
  let component: ActualizaNoticiasComponent;
  let fixture: ComponentFixture<ActualizaNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
