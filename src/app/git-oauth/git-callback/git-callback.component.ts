import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-callback',
  templateUrl: './git-callback.component.html',
  styleUrls: ['./git-callback.component.scss']
})
export class GitCallbackComponent {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.handleQueryParams();
  }
  handleQueryParams() {
    const code = this.route.snapshot.queryParamMap.get('code');
    this.apiService.generateOauthToken({code: code}).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
