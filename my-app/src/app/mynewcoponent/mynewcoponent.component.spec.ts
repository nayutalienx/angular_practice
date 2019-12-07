import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewcoponentComponent } from './mynewcoponent.component';

describe('MynewcoponentComponent', () => {
  let component: MynewcoponentComponent;
  let fixture: ComponentFixture<MynewcoponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynewcoponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynewcoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
