import { Component, SimpleChanges, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 86 / 5;
    }

    // tslint:disable-next-line:member-ordering
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.ratingClicked.emit(`clicked! ${this.rating}`);
    }
}
