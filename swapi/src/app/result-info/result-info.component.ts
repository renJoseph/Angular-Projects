import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-info',
  templateUrl: './result-info.component.html',
  styleUrls: ['./result-info.component.css']
})
export class ResultInfoComponent implements OnInit {

  // constructor(private aR: ActivatedRoute) { }

  constructor(private router: Router) { }
  // onInfoClick(){
  //   this.aR.navigate(['info'])
  // }

  // onResultsClick(){
  //   this.aR.navigate(['results/:id'])
  // }

  ngOnInit(){
    console.log(this.aR.snapshot.params)
  }
}
