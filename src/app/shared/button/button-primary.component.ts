import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input() buttontext: string;
  @Input() buttoncolor: string;
  @Output() onClick = new EventEmitter<any>();
  saveBgColor: string;
  constructor() { }

  ngOnInit() {
    this.saveBgColor = this.buttoncolor;
  }

  changeStyle($event) {
    this.buttoncolor = $event.type == 'mouseover' ? 'transparent' : this.saveBgColor;
  }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
