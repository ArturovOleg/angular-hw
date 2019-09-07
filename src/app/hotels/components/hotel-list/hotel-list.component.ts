import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from "../hotels/hotels.component";

@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.scss"]
})
export class HotelListComponent implements OnInit {
  @Input() hotels: Hotel[];

  constructor() {}

  ngOnInit() {}
}
