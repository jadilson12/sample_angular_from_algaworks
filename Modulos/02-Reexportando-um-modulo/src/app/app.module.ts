import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NavegacaoModule } from "./navegacao/navegacao.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavegacaoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
