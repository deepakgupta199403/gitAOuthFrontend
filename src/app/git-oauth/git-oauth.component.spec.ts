import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitOauthComponent } from './git-oauth.component';

describe('GitOauthComponent', () => {
  let component: GitOauthComponent;
  let fixture: ComponentFixture<GitOauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitOauthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
