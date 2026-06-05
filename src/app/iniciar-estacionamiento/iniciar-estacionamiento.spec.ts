import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarEstacionamiento } from './iniciar-estacionamiento';

describe('IniciarEstacionamiento', () => {
  let component: IniciarEstacionamiento;
  let fixture: ComponentFixture<IniciarEstacionamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarEstacionamiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarEstacionamiento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
