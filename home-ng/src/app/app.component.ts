import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BUILD_ENVIRONMENT } from './build.environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-ng';
  constructor(private meta: Meta, private router: Router) {
    meta.addTag({ name: 'build-version', content: "v" + BUILD_ENVIRONMENT.version });
    meta.addTag({ name: 'build-at', content: BUILD_ENVIRONMENT.time });
    router.navigate(['/home'], { skipLocationChange: true })
  }
}
