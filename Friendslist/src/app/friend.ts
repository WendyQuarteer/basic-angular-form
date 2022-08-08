import {EmailValidator} from "@angular/forms";

export class Friend {
  private _name : string; //all added wen
  private _lastname : string;
  private _email : string;
  private _phone: string;
  private _favoriteLanguage: string;

  constructor( name:string,
               lastname:string,
               email:string,
               phone: string,
               favoriteLanguage: string){

    this._name =  name;
    this._lastname =lastname;
    this._email = email;
    this._phone = phone;
    this._favoriteLanguage = favoriteLanguage;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get favoriteLanguage(): string {
    return this._favoriteLanguage;
  }

  set favoriteLanguage(value: string) {
    this._favoriteLanguage = value;
  }
}
