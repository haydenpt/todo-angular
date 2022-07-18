import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Structure of the response we're expecting
export class HelloWorldBean {
  constructor(public message: string) {

  }
}

export class Vehicle {
  constructor(public vinNumber: string) {

  }
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBean() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world');
    // console.log('Hello World Bean');
  }

  executeVehicle(vinNumber: string) {
    return this.http.get<Vehicle>(`http://localhost:8080/vehicle/${vinNumber}`);
  }
}
