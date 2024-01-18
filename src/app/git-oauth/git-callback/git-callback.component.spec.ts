import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCallbackComponent } from './git-callback.component';

describe('GitCallbackComponent', () => {
  let component: GitCallbackComponent;
  let fixture: ComponentFixture<GitCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
