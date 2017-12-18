import { Directive, ElementRef, HostListener, Renderer } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms/src/directives/control_value_accessor";

@Directive({
  selector: "[appPx]"
})
export class PxDirective implements ControlValueAccessor {

  onChange = (_: any) => { };
  onTouched = () => { };

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    console.log("In constructor!!");
  }

  @HostListener("px-dropdown-selection-changed", ["$event.detail"]) onPxChange(event) {
    console.log(event);
    // this.onChange(event);
  }

  writeValue(value: any): void {
    console.log(value);
    // this._elementRef.nativeElement.setAttribute("selected", value);
    // this._renderer.setElementProperty(this._elementRef, "selected", value);
  }

  registerOnChange(fn: () => any): void { this.onChange = fn; }
  registerOnTouched(fn: () => any): void { this.onTouched = fn; }
}
