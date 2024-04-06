import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit{

  @Input()
  control!: AbstractControl;
  @Input()
  showErrorWhen: boolean = true;
  @Input()
  label!: string;
  @Input()
  type: 'text' | 'password' | 'email' = 'text';
formControl: any;

  get formCotrol(){

    return this.control as FormControl

  }
  
  constructor(){}

  ngOnInit(): void {
    
  }

}
