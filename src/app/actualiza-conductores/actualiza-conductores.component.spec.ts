import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaConductoresComponent } from './actualiza-conductores.component';

describe('ActualizaConductoresComponent', () => {
  let component: ActualizaConductoresComponent;
  let fixture: ComponentFixture<ActualizaConductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaConductoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
