import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BotaoGrandeComponent } from "./botao-grande/botao-grande.component";
import { MenuComponent } from "../navegacao/menu/menu.component";

@NgModule({
  declarations: [BotaoGrandeComponent],
  imports: [CommonModule],

  exports: [BotaoGrandeComponent]
})
export class BotoesModule {}
