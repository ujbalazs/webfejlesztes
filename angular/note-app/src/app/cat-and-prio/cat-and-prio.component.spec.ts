import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAndPrioComponent } from './cat-and-prio.component';

describe('CatAndPrioComponent', () => {
  let component: CatAndPrioComponent;
  let fixture: ComponentFixture<CatAndPrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatAndPrioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatAndPrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
