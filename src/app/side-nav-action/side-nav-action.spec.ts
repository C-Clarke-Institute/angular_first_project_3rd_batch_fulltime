import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavAction } from './side-nav-action';

describe('SideNavAction', () => {
  let component: SideNavAction;
  let fixture: ComponentFixture<SideNavAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavAction],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavAction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
