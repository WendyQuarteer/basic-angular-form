import {Component, OnInit} from '@angular/core';
import {Friend} from "../friend";//added wen
import {AddFriend} from "../add-friend.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  languages: string[] = ['html', 'css', 'js'];//it's going to be an array of strings.
  private addFriendService : AddFriend;
  friendModel = new Friend("", "", "", "", "");//added wen


  submitted = false;

  onSubmit() {
    this.submitted = true;
  };

  constructor(addFriendService: AddFriend) {
    this.addFriendService = addFriendService;
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.friendModel)
    const observable = this.addFriendService.addFriend(this.friendModel);
    console.log(observable);
    observable.subscribe({
      next: (data) => console.log(data),
      error: (e) => console.error(e),
      complete: () => console.info('it worked'),
    });
  };


};
