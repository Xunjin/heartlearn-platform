import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input() buttontext: string;
  @Input() buttoncolor: string;
  constructor() { }

  ngOnInit() {
  }

}
