import { Directive, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appCampoColorido]"
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener("focus") aoGanhaFoco() {
    this.corDeFundo = this.cor;
  }

  @HostListener("blur") aoPederFoco() {
    this.corDeFundo = 'transparent';

  }
}
