import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarcompraComponent } from './adicionarcompra.component';

describe('AdicionarcompraComponent', () => {
  let component: AdicionarcompraComponent;
  let fixture: ComponentFixture<AdicionarcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarcompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
