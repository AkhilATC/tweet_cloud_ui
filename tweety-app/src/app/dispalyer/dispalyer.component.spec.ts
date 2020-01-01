import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyerComponent } from './dispalyer.component';

describe('DispalyerComponent', () => {
  let component: DispalyerComponent;
  let fixture: ComponentFixture<DispalyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispalyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
