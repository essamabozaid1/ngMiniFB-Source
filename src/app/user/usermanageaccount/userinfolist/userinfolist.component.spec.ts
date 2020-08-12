import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfolistComponent } from './userinfolist.component';

describe('UserinfolistComponent', () => {
  let component: UserinfolistComponent;
  let fixture: ComponentFixture<UserinfolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
