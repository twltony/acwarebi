import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartySignOnComponent } from './thirdparty-sign-on.component';

describe('ThirdpartySignOnComponent', () => {
  let component: ThirdpartySignOnComponent;
  let fixture: ComponentFixture<ThirdpartySignOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdpartySignOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdpartySignOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
