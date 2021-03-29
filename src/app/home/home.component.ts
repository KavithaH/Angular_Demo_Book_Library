import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  loc: any;
  ngOnInit(): void {
  }


  show(event: any): void {
    this.loc = event.target.value;
  }
  fnBookLibrary(): void {
    this.router.navigateByUrl('/booklibrary/'+this.loc);
  }
}
