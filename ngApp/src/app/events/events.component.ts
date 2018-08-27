import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = []
  private page =""
  constructor(private _eventService: EventService,private _router: Router) { }
  getName(event){
    return "/"+event.name;
  }

  ngOnInit() {
    this._eventService.getEvent()
    .subscribe(
      res=> this.events = res,
      err => console.log(err)
    )
  }

}
