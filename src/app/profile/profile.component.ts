import { UserService } from "./../services/users.service";
import { IUser } from "./../models/user";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName = new FormControl("", [Validators.required]);
  lastName = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required]);
  phone = new FormControl("", [Validators.required]);
  mobile = new FormControl("", [Validators.required]);
  image = new FormControl("", [Validators.required]);
  location = new FormControl("", [Validators.required]);
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      mobile: this.mobile,
      image: this.image,
      location: this.location
    });
    this.userService.getProfile().subscribe(data => {
      this.profileForm.patchValue(data);
    });
  }
}
