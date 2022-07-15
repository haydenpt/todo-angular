import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''

  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.activeRoute.snapshot.params['username']);
    this.name = this.activeRoute.snapshot.params['username'];
  }

}
