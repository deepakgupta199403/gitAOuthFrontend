import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from '../../environments/environment';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-git-oauth',
  templateUrl: './git-oauth.component.html',
  styleUrls: ['./git-oauth.component.scss'],
})
export class GitOauthComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private apiService: ApiService
  ) {
    this.setSvg();
  }
  panelOpenState = false;
  authTokenDetails: any;

  ngOnInit() {
    this.isAlreadyAuthorized();
  }

  redirectToGithub() {
    window.location.href = `${environment.GITHUB_OAUTH}?client_id=${environment.GIT_CLIENT_ID}&response_type=code&scope=repo&redirect_uri=${window.location.origin}/github/callback`
  }

  removeGitAuth() {
    this.apiService.deleteAuthToken(this.authTokenDetails.accessToken).subscribe({
      next: (authToken: any) => {
        this.authTokenDetails = authToken;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  isAlreadyAuthorized() {
    this.apiService.fetchAuthToken().subscribe({
      next: (authToken: any) => {
        this.authTokenDetails = authToken.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  setSvg() {
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/images/github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "incognito",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/images/incognito.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "check",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/images/green-check.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "watch",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/images/watch.svg")
    );
  }
}
