import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.scss"]
})
export class HotelListComponent implements OnInit {
  @Input() hotels: Hotel[];
  @Input() curentHotel: Hotel;
  @Output() hotel: EventEmitter<Hotel> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public selectHotel(hotel: Hotel) {
    this.hotel.emit(hotel);
  }
}
