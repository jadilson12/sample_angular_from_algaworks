import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appCampoColorido]"
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener("focus") aoGanhaFoco() {
    this.corDeFundo = 'yellow';
  }

  @HostListener("blur") aoPederFoco() {
    this.corDeFundo = 'transparent';

  }
}
