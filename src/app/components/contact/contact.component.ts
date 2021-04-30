import {Component, OnInit} from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public name: string = "";
  public email: string = "";
  public phone: string = "";
  public message: string = "";
  public disabled = false;
  public success = false;
  public error = false;
  public wrong = false;
  public sending = false;

  constructor() {
  }

  ngOnInit(): void {
    emailjs.init("user_KVlmO3to7Ww9ptFyvIUBf");
  }

  onSubmit($event: any) {
    this.error = false;
    if (this.validateName() && this.validateEmail() && this.validateMsg() && this.validatePhone()) {
      this.sending = true;
      const body = {
        email_from_name: this.name,
        email_from_email: this.email.toLocaleLowerCase(),
        email_to: "contact@lkeaz.me",
        email_phone: this.phone,
        email_html: this.message
      };
      this.disabled = true;
      emailjs.send("default_service", "template_Z1BGxcXr", body).then(() => {
        this.sending = false;
      }).then(() => {
        this.success = true;
      }, () => {
        this.wrong = true;
        this.disabled = false;
      });
    } else {
      this.error = true;
    }
  }

  private validateName() {
    return !!this.name.length && !/\d/.test(this.name)
  }

  private validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !!this.email.length && re.test(this.email);
  }

  private validatePhone() {
    if (this.phone.length) {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return !!this.phone.length && re.test(this.phone);
    }
    return true;
  }

  private validateMsg() {
    return 30 <= this.message.length;
  }
}
