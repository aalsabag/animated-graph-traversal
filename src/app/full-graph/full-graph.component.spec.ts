import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullGraphComponent } from './full-graph.component';

describe('FullGraphComponent', () => {
  let component: FullGraphComponent;
  let fixture: ComponentFixture<FullGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
