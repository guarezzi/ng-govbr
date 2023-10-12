import { ElementRef } from "@angular/core";
import { GovBrComponentsEnum } from "./govbr-components.enum";

export class GovbrService {

    public initialize(componentName: GovBrComponentsEnum, template: ElementRef) {
        this.initializeComponent(componentName, template);
    }

    get context(): Document {
        return window.document;
    }

    get core() {
        return window['core'];
    }

    private initializeComponent(componentName: GovBrComponentsEnum, template: ElementRef) {
        const map = this.getReverseEnumMap();
        new this.core[map.get(componentName)](componentName, template);
    }

    private getReverseEnumMap(): Map<string, string> {
        const map = new Map<string, string>();
        
        Object.entries(GovBrComponentsEnum).map(
            values => map.set(values[1], values[0])
        );

        return map;
    }

}