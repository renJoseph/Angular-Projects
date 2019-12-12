import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from './swapi.service';
import { createComponent } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swapi';
}