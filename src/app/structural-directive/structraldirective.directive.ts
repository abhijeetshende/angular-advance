import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appStructraldirective]',
})
export class StructraldirectiveDirective implements OnChanges {
  @Input() appStructraldirective: boolean = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  ngOnInit(): void {}
  ngOnChanges() {
    if (this.appStructraldirective) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
}
