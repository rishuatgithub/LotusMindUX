import { Component, Input } from '@angular/core';

@Component({
    selector:'collapsible-details',
    template:
    `
    <div (click)="toggleContent()" class="well pointable">
        <h2 class="well-title">{{title}}</h2>
        <ng-content *ngIf="visible"></ng-content>
    </div>

    `
})

export class CollapsibleDetailsComponent{
    @Input() title:string

    visible: boolean = true

    toggleContent(){
        this.visible = !this.visible
    }



}