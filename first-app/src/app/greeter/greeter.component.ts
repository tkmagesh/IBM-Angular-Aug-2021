import { Component, OnInit } from '@angular/core';
import { GreeterService } from './greeter.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  greetMessage : string = '[Default greet message]';

  constructor( private greeterService : GreeterService) { }

  ngOnInit(): void {
  }

  onBtnGreetClick(userName : string){
    this.greetMessage = this.greeterService.greet(userName);
  }
}
