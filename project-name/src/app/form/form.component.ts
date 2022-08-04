import { Component, OnInit } from '@angular/core';
import {Friend} from  "../friend";//added wen

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
languages: string[]  = ['html', 'css', 'js'];//it's going to be an array of strings.
  friendModel = new Friend("", "", "", "", "");//added wen

  constructor() { }

  ngOnInit(): void {
  }

}
