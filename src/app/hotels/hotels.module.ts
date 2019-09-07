import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HotelsComponent } from "./components/hotels/hotels.component";
import { SharedModule } from "./shared/shared.module";
import { HotelListComponent } from "./components/hotel-list/hotel-list.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { ProfileComponent } from "./components/profile/profile.component";

@NgModule({
  declarations: [
    HotelsComponent,
    HotelListComponent,
    WeatherComponent,
    ProfileComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    HotelsComponent,
    HotelListComponent,
    WeatherComponent,
    ProfileComponent
  ],
  entryComponents: []
})
export class HotelsModule {}
