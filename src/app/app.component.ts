import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'DemoBookLibrary';
  loc: any = 'India';
  constructor(private router: Router){

  }
  show(event: any): void {
    this.loc = event.target.value;
  }
  fnBookLibrary(): void {
    this.router.navigateByUrl('/booklibrary');
  }
}
