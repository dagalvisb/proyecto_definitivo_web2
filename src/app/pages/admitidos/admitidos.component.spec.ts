import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitidosComponent } from './admitidos.component';

describe('AdmitidosComponent', () => {
  let component: AdmitidosComponent;
  let fixture: ComponentFixture<AdmitidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmitidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmitidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
