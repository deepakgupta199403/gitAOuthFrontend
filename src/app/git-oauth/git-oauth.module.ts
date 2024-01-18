import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitOAuthRoutingModule } from './git-oauth-routing.module';
import { GitCallbackComponent } from './git-callback/git-callback.component';
import { GitOauthComponent } from './git-oauth.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    GitOauthComponent,
    GitCallbackComponent
  ],
  imports: [
    CommonModule,
    GitOAuthRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class GitOAuthModule { }
