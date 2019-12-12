import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  allCharacterData;

  constructor(private swapi: SwapiService) {
  }
  
  charKeys = [];
  ngOnInit() {
    this.swapi.getAllCharacters().subscribe((data: any) => {
      this.allCharacterData = data;
      // Looping through first element to find all keys 
      this.charKeys = Object.keys(data.results[0]);
    });
  }
  onResultClick(){
    
  }
}
