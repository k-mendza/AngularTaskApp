import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAsideComponent } from './basic-aside.component';

describe('BasicAsideComponent', () => {
  let component: BasicAsideComponent;
  let fixture: ComponentFixture<BasicAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
