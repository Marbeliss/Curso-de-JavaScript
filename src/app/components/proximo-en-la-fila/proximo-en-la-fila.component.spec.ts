import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximoEnLaFilaComponent } from './proximo-en-la-fila.component';

describe('ProximoEnLaFilaComponent', () => {
  let component: ProximoEnLaFilaComponent;
  let fixture: ComponentFixture<ProximoEnLaFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximoEnLaFilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximoEnLaFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
