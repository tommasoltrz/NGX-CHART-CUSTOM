import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from "./app.component";
import { CustomChartComponent } from './custom/custom.component';

@NgModule({
  declarations: [AppComponent, CustomChartComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
