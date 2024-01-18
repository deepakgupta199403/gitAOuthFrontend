import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GitOauthComponent} from './git-oauth.component';
import { GitCallbackComponent } from './git-callback/git-callback.component';


const routes: Routes = [
  {
    path: '',
    component: GitOauthComponent
  },{
    path: 'github/callback',
    component: GitCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitOAuthRoutingModule { }
