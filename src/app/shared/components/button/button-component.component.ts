import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {

  @Input() buttontext: string;
  @Input() buttonstyle: string;
  @Output() Click = new EventEmitter<any>();

  saveBgColor: string;
  constructor() { }

  ngOnInit() {
  }

  onClickButton(event: any) {
    this.Click.emit(event);
  }
}
