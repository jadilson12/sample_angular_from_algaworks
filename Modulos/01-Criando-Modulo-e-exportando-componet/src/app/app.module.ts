import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BotoesModule } from "./botoes/botoes.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule,
     AppRoutingModule,
     BotoesModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
