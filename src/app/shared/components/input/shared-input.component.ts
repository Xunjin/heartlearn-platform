import { Component, OnInit, Input } from '@angular/core';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.css']
})
export class SharedInputComponent implements OnInit {

  @Input() iconName: string;
  @Input() type: string;
  @Input() placeholder: string;
  model: string;
  icon: string;

  constructor() { }

  importIcon = async () => {
    if (this.iconName) {
      library.add(faIcons[this.iconName]);
      this.icon = faIcons[this.iconName].iconName;
    }
  }
  ngOnInit() {
    this.importIcon();
  }

}
