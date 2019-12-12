import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  history = []

  constructor(private myService: TestService) { }

  updateCounter(amount): void {

    this.myService.doSomeStuff()
    
    if (amount === 0) {
      this.counter = 0;
    } else {
      this.counter += amount;
    }
    this.history.push(this.counter);
  }
}
