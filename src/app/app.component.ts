import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-sentry';
  myUndefinedFunction: any; 

  ngOnInit() {
    setTimeout(() => {
      this.myUndefinedFunction();
    }, 5000);
  }
}
