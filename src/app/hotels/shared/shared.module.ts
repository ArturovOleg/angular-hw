import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HotelCardComponent } from "./components/hotel-card/hotel-card.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HotelCardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, HotelCardComponent]
})
export class SharedModule {}
