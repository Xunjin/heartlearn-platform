import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.css']
})
export class SharedButtonComponent implements OnInit {

  @Input() buttontext: string;
  @Input() buttonstyle: string;
  @Output() click = new EventEmitter<any>();

  saveBgColor: string;
  constructor() { }

  ngOnInit() {
  }

  onClickButton(event: any) {
    this.click.emit(event);
  }
}
