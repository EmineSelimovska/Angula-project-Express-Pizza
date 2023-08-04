import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

interface Profile {
  name: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  isEditMode: boolean = false;

  user!:User;

  
  profileDetails: Profile = {
    name: '',
    email: '',
    address: '',
   
  };
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(10)]]
  })
 constructor(private fb: FormBuilder,
  private userService: UserService) {
   
 }

  ngOnInit(): void {
    const { name, email, address} = this.userService.currentUser;
    this.profileDetails = {
      name,
      email,
      address,
    };

    this.form.setValue({
      name,
      email,
      address,
    });
  
  }
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = { ...this.form.value } as Profile;
    const { name, email, address } = this.profileDetails;
    
  }

}
