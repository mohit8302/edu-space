import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiGraphComponent } from './kpi-graph.component';

describe('KpiGraphComponent', () => {
  let component: KpiGraphComponent;
  let fixture: ComponentFixture<KpiGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
