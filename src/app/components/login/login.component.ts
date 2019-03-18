import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }
  verifyBlankSpaces = async () => {
    if (!this.username || this.username.trim() === '') {
      throw new Error('Campo usuário vazio.');
    }
    if (!this.password || this.password.trim() === '') {
      throw new Error('Campo senha vazio.');
    }
  }
  onLogin = async () => {
    await this.verifyBlankSpaces();
  }

}
