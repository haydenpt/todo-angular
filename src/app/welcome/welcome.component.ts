import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromService = '';
  errorMessageFromService = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    // console.log(this.activeRoute.snapshot.params['username']);
    this.name = this.activeRoute.snapshot.params['username'];
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBean());

    // Must call subscribe() to execute the Http service
    this.welcomeDataService.executeHelloWorldBean().subscribe({
      next: (v) => this.handleSuccessfulResponse(v),
      error: (e) => this.handdleErrorResponse(e),
    });

    console.log('something');

    this.welcomeDataService.executeVehicle("1G6KQ1111N108A8BE").subscribe({
      next: (v) => this.handleSuccessfulResponse(v),
    });
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.vinNumber;
    console.log(response.vinNumber);
  }

  handdleErrorResponse(error: any) {
    this.errorMessageFromService = error.error.message;
  }
}
