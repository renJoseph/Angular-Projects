import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  doSomeStuff() {
  return 'stuff';
}
}
