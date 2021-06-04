import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg = this.formBuilder.group({
    nom: '',
    pass: ''
    });

  constructor(private formBuilder: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
  }

  validForm(): void {
    this.userService.newUser(this.formReg.value.nom,this.formReg.value.pass);
  }

}
