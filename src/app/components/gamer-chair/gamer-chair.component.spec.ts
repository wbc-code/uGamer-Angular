import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerChairComponent } from './gamer-chair.component';

describe('GamerChairComponent', () => {
  let component: GamerChairComponent;
  let fixture: ComponentFixture<GamerChairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamerChairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamerChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
